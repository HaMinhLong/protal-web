// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

// ICONS IMPORT
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// PROJECT IMPORT
import DialogPopUp from 'components/Extended/DialogPopUp';
import createNotification from 'components/Extended/Notification';
import WebsiteSelect from 'components/Common/WebsiteSelect';
import Loading from 'components/Extended/Loading';

interface Props {
  open: boolean;
  dataEdit: any;
  handleClose: () => void;
  formikProp: any;
}

const GrantPermissionPopUp = ({ open, dataEdit, handleClose, formikProp }: Props) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  return <div>react</div>;
};

export default GrantPermissionPopUp;
