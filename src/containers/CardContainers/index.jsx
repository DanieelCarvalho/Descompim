import { Card } from "../../Components/Card";
import { UseAppContext } from "../../store/AppContext";
import { openModalSavePin } from "../../store/actions";
export const CardContainer = (props) => {
  const { state, dispatch } = UseAppContext();
  const handleClick = (pinId) => {
    console.log("Clicou", pinId);
    dispatch(openModalSavePin(pinId));
  };
  return <Card {...props} onClick={handleClick} />;
};
