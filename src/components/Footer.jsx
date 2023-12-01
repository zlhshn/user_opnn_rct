import FooterStyled from "../scss/footer.module.scss"

const Footer = () => {
  return (
    <footer className={FooterStyled.footer}>
        © Copyright by zlhshn {new Date().getFullYear()}
        </footer>
  )
}

export default Footer