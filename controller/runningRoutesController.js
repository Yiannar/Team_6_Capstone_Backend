const express = require('express');
const runningRoutes = express.Router();
const {
  getAllRunningRoutes,
  getRunningRoute,
  createRunningRoute,
  deleteRunningRoute,
  updateRunningRoute,
} = require('../queries/running_routes');

// Index route
runningRoutes.get('/', async (req, res) => {
  const allRunningRoutes = await getAllRunningRoutes();
  if (allRunningRoutes[0]) {
    res.status(200).json(allRunningRoutes);
  } else {
    res.status(500).json({ error: 'Unable to get all running routes' });
  }
});

// Show Running Route
runningRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const runningRoute = await getRunningRoute(id);
  console.log('runningRoute', runningRoute);
  if (!runningRoute.message) {
    res.status(200).json(runningRoute);
  } else {
    res.status(400).json({ error: 'Running Route not found' });
  }
});

// Create Running Route
runningRoutes.post('/', async (req, res) => {
  try {
    const runningRoute = await createRunningRoute(req.body);
    res.status(200).json(runningRoute);
  } catch (error) {
    res.status(500).json({ error: 'Cannot create a running route' });
  }
});

// Delete Running Route
runningRoutes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRunningRoute = await deleteRunningRoute(id);
    res.status(200).json(deletedRunningRoute);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Invalid request to remove a running route' });
  }
});

// Update Running Route
runningRoutes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRunningRoute = await updateRunningRoute(id, req.body);
    res.status(200).json(updatedRunningRoute);
  } catch (error) {
    res.status(500).json({ error: 'Cannot update running route' });
  }
});

module.exports = runningRoutes;
