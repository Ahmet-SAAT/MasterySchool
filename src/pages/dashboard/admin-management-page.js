import React from 'react'
import PageHeader from '../../components/common/page-header'
import AdminList from '../../components/dashboard/home/admin-management/admin-list';
import Spacer from '../../components/common/spacer'
import NewAdminForm from '../../components/dashboard/home/admin-management/new-admin-form';
import { useSelector } from 'react-redux';
const AdminManagementPage = () => {
  const {currentOperation}=useSelector(state=>state.misc)
  return (
    <>
  <PageHeader title="Admin Management"/>  
  <Spacer/>  
  {currentOperation ==="new" &&<NewAdminForm/>}  
  <Spacer/>  
  <AdminList/>  
  <Spacer/>  
    
    </>
  )
};

export default AdminManagementPage