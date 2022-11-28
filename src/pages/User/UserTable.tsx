// THIRD IMPORT
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import {
  Box,
  useMediaQuery,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  Pagination
} from '@mui/material';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';

// ICON IMPORT
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// PROJECT IMPORT
import { useDispatch, useSelector } from 'app/store';
import { user } from 'features/user/userSlice';
import SwitchStatus from 'components/Extended/SwitchStatus';
import createNotification from 'components/Extended/Notification';
import Loading from 'components/Extended/Loading';
import NoData from 'components/Extended/NoData';
import AlertDelete from 'components/Extended/AlertDelete';

// TYPES IMPORT
import { UserType } from 'types/user';

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

interface Props {
  dataEdit: UserType;
  setDataEdit: Dispatch<SetStateAction<UserType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  getList: () => void;
}

const UserTable = ({ dataEdit, setDataEdit, setVisibleDrawer, loading, setLoading, getList }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const userState = useSelector(user);
  const userGroups = userState.data.list;
  const pagination = userState.data.pagination;

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const handleTableChange = (e: ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    const queryFilter = userState.filter;

    const queryName = {
      email: queryFilter?.email?.trim(),
      userGroupId: queryFilter?.userGroupId,
      status: queryFilter?.status
    };
    if (!queryFilter?.email?.trim()) {
      delete queryName.email;
    }
    if (!queryFilter?.userGroupId) {
      delete queryName.userGroupId;
    }
    if (queryFilter?.status === '') {
      delete queryName.status;
    }
    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([page * pagination.pageSize - pagination.pageSize, page * pagination.pageSize]),
      sort: JSON.stringify(['createdAt', 'DESC']),
      attributes: 'id,username,fullName,email,mobile,status,createdAt,userGroupId'
    };

    dispatch({
      type: 'user/fetch',
      payload: query,
      callback: (res) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification('error', res?.message);
        }
      }
    });
  };

  const handleStatus = (value: number, id: number | undefined) => {
    const status = value;
    const item = {
      status
    };
    dispatch({
      type: 'user/updateStatus',
      payload: {
        id: id,
        params: item
      },
      callback: (res) => {
        if (res?.success === true) {
          createNotification('success', res?.message);
        } else {
          createNotification('error', res?.message);
        }
      }
    });
  };

  const handleRemove = (confirmDelete: boolean) => {
    setConfirmDelete(false);
    if (confirmDelete) {
      dispatch({
        type: 'user/delete',
        payload: {
          id: dataEdit?.id
        },
        callback: (res) => {
          if (res?.success === true) {
            createNotification('success', res?.message);
            getList();
          } else if (res?.success === false) {
            createNotification('error', res?.message);
          }
        }
      });
    }
  };

  const renderTableHead = () => {
    const styleCell = { whiteSpace: 'nowrap', fontWeight: 'bold' };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: '5%' }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Họ tên</TableCell>
        <TableCell sx={styleCell}>Username</TableCell>
        <TableCell sx={styleCell}>Email</TableCell>
        <TableCell sx={styleCell}>Số điện thoại</TableCell>
        <TableCell sx={styleCell}>Nhóm tài khoản</TableCell>
        <TableCell sx={styleCell}>Ngày tạo</TableCell>
        <TableCell sx={styleCell}>Trạng thái</TableCell>
        <TableCell align="right" sx={styleCell}>
          Hành động
        </TableCell>
      </TableRow>
    );
  };

  const renderTableBody = (item: UserType, index: number) => {
    return (
      <TableRow hover key={item.id}>
        <TableCell sx={{ width: '5%' }} align="center">
          <Typography variant="body2">{index + PAGE_SIZE * (pagination?.current - 1) + 1}</Typography>
        </TableCell>
        <TableCell sx={{ width: '20%', overflow: 'hidden', maxWidth: 300 }} component="th" scope="row">
          {item.fullName}
        </TableCell>
        <TableCell>{item?.username}</TableCell>
        <TableCell>{item?.email}</TableCell>
        <TableCell>{item?.mobile}</TableCell>
        <TableCell>{item?.userGroup?.name}</TableCell>
        <TableCell>{moment(item?.createdAt).format('DD/MM/YYYY HH:mm')}</TableCell>
        <TableCell>{renderStatus(item)}</TableCell>
        <TableCell align="right">{renderMenuButton(item)}</TableCell>
      </TableRow>
    );
  };

  const renderStatus = (item: UserType) => {
    return <SwitchStatus status={item?.status} id={item?.id} handleStatus={handleStatus} />;
  };

  const renderMenuButton = (item: UserType) => (
    <>
      {item?.userGroupId !== 1 && (
        <Button
          size="small"
          variant="outlined"
          color="success"
          endIcon={<EditIcon />}
          onClick={() => {
            setDataEdit(item);
            setVisibleDrawer(true);
          }}
        >
          Cấp quyền
        </Button>
      )}
      <Button
        size="small"
        variant="outlined"
        sx={{ ml: 1 }}
        endIcon={<EditIcon />}
        onClick={() => {
          setDataEdit(item);
          setVisibleDrawer(true);
        }}
      >
        Sửa
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        sx={{ ml: 1 }}
        endIcon={<DeleteIcon />}
        onClick={() => {
          setConfirmDelete(true);
          setDataEdit(item);
        }}
      >
        Xóa
      </Button>
    </>
  );

  return (
    <Box sx={{ position: 'relative', pb: 2 }}>
      <TableContainer sx={{ overflow: 'auto' }}>
        <Table>
          <TableHead>{renderTableHead()}</TableHead>
          <TableBody>{userGroups?.map((item, index) => renderTableBody(item, index))}</TableBody>
        </Table>
        {userGroups?.length > 0 && (
          <Pagination
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'flex-end'
            }}
            size={matchDownSM ? 'small' : 'medium'}
            count={Math.floor(pagination?.total / pagination?.pageSize) + 1}
            page={pagination?.current}
            color="primary"
            shape="rounded"
            onChange={handleTableChange}
          />
        )}
      </TableContainer>

      {userGroups?.length === 0 && <NoData />}
      {loading && <Loading />}
      {confirmDelete && <AlertDelete name={dataEdit?.fullName} open={confirmDelete} handleClose={handleRemove} />}
    </Box>
  );
};

export default UserTable;
