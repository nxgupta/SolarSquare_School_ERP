import api from "./axiosPublic";

const addStudent = async (data,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.post(`/student`, data, config);

  return response.data.student;
};

const getStudents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.get(`/student`, config);

  return response.data.students;
};

const getStudentDetails = async (studentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.get(`/student/${studentId}` , config);
  
  return response.data.student;
}

const getParentChildren = async (userEmail, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.get(`/student/parentChildren?parentEmail=${userEmail}`, config);

    return response.data.student;
  };

  const payFees = async (studentId, token) => {
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.patch(`/student/${studentId}`, { isFeesPaid:true } , config);
    
    return response.data.student;
  };

  const updateStudent = async (studentId, data, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.patch(`/student/${studentId}/update`, data , config);
    
    return response.data.student;
  };

  const deleteStudent = async (studentId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await api.delete(`/student/${studentId}`, config);
    
    return response.data;
  };

  const studentService = {
    getParentChildren,
    payFees,
    getStudents,
    getStudentDetails,
    updateStudent,
    deleteStudent,
    addStudent
  }

  export default studentService