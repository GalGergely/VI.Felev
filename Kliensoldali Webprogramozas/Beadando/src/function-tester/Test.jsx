import { Card, CardContent, Typography, Button, Box } from '@mui/material';

export function Test({name, points, onRun, onDelete, status}) {
    const statusColors = ['grey', 'green', 'red'];

    return(
    <Card sx={{ maxWidth: '100%', mb: 2, border: `2px solid ${statusColors[status]}` }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            {status === 1 && <Typography variant="body2">
              Points: {points}
            </Typography>}
            {status === 2 && <Typography variant="body2">
              Points: 0
            </Typography>}
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={onRun} sx={{ mr: 1 }}>
              Run
            </Button>
            <Button variant="contained" color="secondary" onClick={onDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
    );
}
