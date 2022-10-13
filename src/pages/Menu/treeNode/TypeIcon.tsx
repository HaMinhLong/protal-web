// THIRD IMPORT

// ICONS IMPORT
import FolderIcon from '@mui/icons-material/Folder';
import ImageIcon from '@mui/icons-material/Image';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DescriptionIcon from '@mui/icons-material/Description';

type Props = {
  droppable?: boolean;
  fileType?: string;
};

const TypeIcon = ({ droppable, fileType }: Props) => {
  if (droppable) {
    return <FolderIcon />;
  }

  switch (fileType) {
    case 'image':
      return <ImageIcon />;
    case 'csv':
      return <ListAltIcon />;
    case 'text':
      return <DescriptionIcon />;
    default:
      return null;
  }
};

export default TypeIcon;
