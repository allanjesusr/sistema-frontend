import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { FormMediaAsunto } from '../components/forms/FormMediaAsunto';
import { FormSelectDepartment } from '../components/forms/FormSelectDepartment';
import { FormDate } from '../components/forms/FormDate';
import { FormReunion } from '../components/forms/FormReunion';
import { TableComponent } from '../components/table/TableComponent';
import { Dashboard } from '../components/dashboard/Dashboard';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginScreen /> } />
                <Route path='/form1' element={ <FormSelectDepartment /> } />
                <Route path='/form2' element={ <FormDate /> } />
                <Route path='/form3' element={ <FormReunion /> } />
                <Route path='/form4' element={ <FormMediaAsunto /> } />

                <Route path='/tabla' element={ <TableComponent /> } />

                <Route path='/dashboard' element={ <Dashboard /> } />
            </Routes>
        </BrowserRouter>
    )
}
