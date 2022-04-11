import Styles from "./Card.styles"

import ButtonCard from "../../atoms/ButtonCard/ButtonCard"

interface ICard {
  id: string
  image?: string
  title?: string
  description?: string
  handleEdit: () => void
  handleDelete: () => void
}

const Card: React.FC<ICard> = (
  { id, image, title, description, handleEdit, handleDelete }
) => {
  return (
    <Styles>
      <div className="card-content">

        <div className="column">
          <img className="image-marvel" alt={title} src={image} width={180} height={230} />
        </div>
        <div className="column style-text">
          <p><b>{title}</b></p>
          {description}
        </div>
        <div className="column">
          <div className="center-vertical">
            <ButtonCard
              icon={'edit'}
              onClick={handleEdit}
            />
            <ButtonCard
              icon={'delete'}
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Card
