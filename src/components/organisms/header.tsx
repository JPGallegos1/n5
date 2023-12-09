import styles from "@/styles/_header.module.scss";

type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return <header className={styles.header}>{children}</header>;
}
