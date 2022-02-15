import './IncidentsTable.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

function showRow(row) {
  const rowDate = new Date(row.date)
  return (
    <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
              <TableCell component="th" scope="row">
                {rowDate.toLocaleDateString('ru-RU', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </TableCell>
              <TableCell>{row.number.replace(/^0+/, '')}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.customer.name}</TableCell>
              <TableCell align="right">{row.region.description}</TableCell>
            </TableRow>
  )
}

function IncidentsTable(props) {

  const { incidents } = props.rows
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' stickyHeader={true} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Дата</TableCell>
            <TableCell>Номер</TableCell>
            <TableCell>Тип</TableCell>
            <TableCell align="right">Тема</TableCell>
            <TableCell align="right">Заказчик</TableCell>
            <TableCell align="right">Регион</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map(row => showRow(row))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default IncidentsTable
