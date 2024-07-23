import { Button, TextInput, Paper, Image } from "@mantine/core";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const ModifyProfileInput = ({ modifyProfile }) => {
  const [name, setName] = useState('');

  const handleModifyProfile = async (event) => {
    event.preventDefault();

    try {
      const data = await modifyProfile({
        name
      });
    } catch (error) {
      console.error("Modify Profile failed", error);
    }
  };

  return (
    <form
      onSubmit={handleModifyProfile}
      style={{
        width: 480,
        margin: "auto",
        marginTop: 100
      }}
    >
      <Image
          src="https://github.com/user-attachments/assets/2c913bba-7464-437e-ae7a-9edc496fb86c" 
          alt="Profile Image"
          radius="md"
          mt="md"
          h={200}
          fit="contain"
          mb="xl" 
        />
      <Paper shadow="xs" padding="md" withBorder style={{ marginTop: '150px', padding: '20px' }}>

        <TextInput
          label="Name"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: '20px' }}
        />
        <Button
          variant="outline"
          color="green"
          type="submit"
          fullWidth
          style={{ marginBottom: '20px' }}
        >
          프로필 수정하기
        </Button>
      </Paper>
    </form>
  );
};

export default ModifyProfileInput;
