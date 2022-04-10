import styled from 'styled-components'

const Styles = styled.div`
.card-content {
  background-color: var(--dark-grey);
  height: 240px;
  padding: 6px;
  margin-bottom: 10px;
}

.column {
  float: left;
  width: 33.33%;
}

.style-text {
  color: var(--light-white);
}

.image-marvel {
  border-radius: 10px;
  box-shadow: none;
  border: 3px solid var(--light-orange);
}

.center-vertical {
  margin-top: 25%;
  text-align: end;
  padding-right: 25px;
}

@media (max-width: 500px) {
  .card-content {
    background-color: var(--dark-grey);
    height:280px &column {
      width: auto;
      float: none;
    }
  }
}
`
export default Styles
