import styled from "styled-components";

const Wrapper = styled.div`
  .select {
    position: relative;
    .value-container {
      width: 100%;
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      background: #ffffff;
      border: 1px solid #504f4f3d;
      border-radius: 5px;
      cursor: pointer;
      user-select: none;
      :hover {
        background: transparent;
      }
      .icon {
        margin-left: 10px;
      }
    }
  }
  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    padding: 7px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid rgba(204, 212, 214, 0.5);
    border-radius: 5px;
    box-shadow: 0px 8px 12px rgba(0, 39, 51, 0.12);
    z-index: 9;
    button {
      width: 100%;
      border: none;
      background: #ffffff;
      color: rgba(17, 12, 12, 0.747);
      font-size: 13px;
      cursor: pointer;
      padding: 12px;
      border-radius: 5px;
      text-align: left;
      :hover {
        background: #f2f4f5;
      }
    }
    .selected {
      color: #5ab3a8;
    }
  }
`;

export default Wrapper;
