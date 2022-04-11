import styled from 'styled-components'

const Styles = styled.div`
  .container {    
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: var(--soft-grey);
  }
  .page-container {
    background-color: var(--soft-grey);
    margin: 0px auto;
    max-width: 800px;
  }
  .home-container {
    background-color: var(--soft-grey);
    margin: 0px auto;
    max-width: 800px;
    margin-top: 5%;
    padding: 1px 24px 48px 24px;
  }
  .title-text {    
    color: #848484;
  }
  .search {
    padding: 16px 0;
  }
  .search-input,
  .search-button {
    display: inline-block;
    vertical-align: middle;
  }
  .search-input {
    width: 350px;
    margin-right: 16px;
  }
  .search-button {
    width: 145px;
    max-width: fit-content;
  }
`
export default Styles
