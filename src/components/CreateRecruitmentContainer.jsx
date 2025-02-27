import CreateRecruitmentInput from "./CreateRecruitmentInput.jsx";
import HeaderComponent from './HeaderComponent.jsx';
import MainButtonComponent from './MainButtonComponent.jsx';

const CreateRecruitmentContainer = () => {

  return (
    <div style={{ padding: '0 250px' }}>
        <HeaderComponent />
        <MainButtonComponent/>
        <CreateRecruitmentInput />
    </div>
  );
};

export default CreateRecruitmentContainer;
