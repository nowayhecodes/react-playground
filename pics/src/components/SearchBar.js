import React from "react";
// import styled from "styled-components";

// const SearchWrapper = styled.div`
//   margin: 0 auto;
//   width: 50vw;
//   height: 50px;
//   display: flex;
//   border-radius: 2px;
//   box-shadow: 0 0 10px lightgray;
// `;

// const SearchForm = styled.form`
//   display: flex;
//   align-items: center;
// `;

// const Input = styled.input`
//   appearance: none;
//   -webkit-appearance: none;
//   border: 1px solid linear-gradient(21deg, #10adff, #1beabd);
//   padding: 12px 0;
//   width: 50vw;
//   height: 40px;
//   font-size: 16px;
//   font-weight: 500;
//   background: none;
//   border-radius: 0;
//   color: #223254;
// `;

// const FancyInput = styled.input`
//   position: relative;
//   font-size: 1.5em;
//   background: linear-gradient(21deg, #10adff, #1beabd);
//   padding: 3px;
//   display: inline-block;
//   border-radius: 9999em;
//   &:not(span) {
//     position: relative;
//     display: inherit;
//     border-radius: inherit;
//     margin: 0;
//     border: none;
//     padding: 0 0.325em;
//     z-index: 1;
//   }
//   &:focus + span {
//     opacity: 1;
//     transform: scale(1);
//   }

//   span {
//     transform: scale(0.993, 0.94);
//     transition: transform 0.5s, opacity 0.25s;
//     opacity: 0;
//     position: absolute;
//     z-index: 0;
//     margin: 4px;
//     left: 0;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     border-radius: inherit;
//     pointer-events: none;
//     box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff, 3px -3px 30px #1beabd,
//       -3px 3px 30px #10abff;
//   }
// `;

export default class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();    
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Image search"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>

      //   <SearchWrapper>
      //     <SearchForm>
      //       <Input type="text" />
      //     </SearchForm>
      //   </SearchWrapper>
    );
  }
}
