import { studies, experiences } from "../data/resume" 

function Resume () {
  console.log(studies)
  console.log(experiences)
  return (
    <>
    <h2>Mis estudios</h2>
    <ul>
      {studies.map(({id, title, institution, date}) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{institution}</p>
          <p>{date}</p>
        </li>
      ))}
    </ul>
    <h2>Mi experiencia</h2>
    <ul>
      {experiences.map(({id, title, company, date}) => (
        <li key={id}>
          <h2>{title}</h2>
          <p>{company}</p>
          <p>{date}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Resume