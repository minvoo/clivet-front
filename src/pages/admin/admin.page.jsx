import {useEffect, useState} from "react";
import User from "../../models/user";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";
import {setCurrentUser} from "../../store/actions/user";
import './admin.css';
import {Button, Table, TableBody, TableHead, TableRow} from "@mui/material";

const AdminPage = () => {

    const [rows, setRows] = useState([]);
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user);;

    //mounted
    useEffect(() => {
        AuthenticationService.getAll().then((response) => {
            setRows(response.data)
        })
    }, [])

    return (
        <div className="background">
            <div className="p-3 custom-card">

                <Table >
                    <TableHead>
                        <TableRow>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Pets</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(
                                row =>
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.firstName}</td>
                                        <td>{row.lastName}</td>
                                        <td>
                                            <Button onClick={() => navigate(`/owners/${row.id}/pets`)}>Details</Button>
                                        </td>
                                    </tr>
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
export { AdminPage }