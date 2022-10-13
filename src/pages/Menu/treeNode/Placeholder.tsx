// THIRD IMPORT
import { useMemo } from "react";

// PROJECT IMPORT
import styles from "pages/Menu/css/Placeholder.module.css";

type Props = {
  depth: number;
};

const Placeholder = ({ depth }: Props) => {
  const placeholder = useMemo(() => {
    const left = depth * 24;
    return <div className={styles.root} style={{ left }} />;
  }, [depth]);

  return placeholder;
};

export default Placeholder;
