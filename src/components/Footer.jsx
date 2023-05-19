import './Footer.css'
function Footer() {
  const year = new Date().getFullYear();
  return (
      <div className='foot'>Kariuki Evans Ngugi  © C2562hsgsy  {year}</div>
  )
}

export default Footer