import projects from "../data/projects" 

function Projects () {
  console.log(projects)
  return (
    <>
    <h1>Mis proyectos</h1>
    <ul>
      {projects.map(({id, name, image, description, url}) => (
        <li key={id}>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p>{description}</p>
          <a href={url} target='_blank'>Link</a>
        </li>
      ))}
    </ul>
    </>
  )
}

export default Projects