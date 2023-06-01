const db = require('../db/dbConfig');

const getAllRunningRoutes = async () => {
  try {
    const allRunningRoutes = await db.any('SELECT * FROM running_routes');
    return allRunningRoutes;
  } catch (error) {
    return error;
  }
};

const getRunningRoute = async (id) => {
  try {
    const runningRoute = await db.one(
      'SELECT * FROM running_routes WHERE id = $1',
      id
    );
    return runningRoute;
  } catch (error) {
    return error;
  }
};

const createRunningRoute = async (runningRouteData) => {
  const { title, description, distance, location } = runningRouteData;
  try {
    const createdRunningRoute = await db.one(
      'INSERT INTO running_routes (title,  description, distance,location) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, distance, location]
    );
    return createdRunningRoute;
  } catch (error) {
    return error;
  }
};

const deleteRunningRoute = async (id) => {
  try {
    const deletedRunningRoute = await db.one(
      'DELETE FROM running_routes WHERE id = $1 RETURNING *',
      id
    );
    return deletedRunningRoute;
  } catch (error) {
    return error;
  }
};

const updateRunningRoute = async (id, runningRouteData) => {
  const { title, description, distance, location } = runningRouteData;
  try {
    const updatedRunningRoute = await db.one(
      'UPDATE running_routes SET title = $1,description = $2, distance = $3, location = $4 WHERE id = $5 RETURNING *',
      [title, description, distance, location, id]
    );
    return updatedRunningRoute;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRunningRoutes,
  getRunningRoute,
  createRunningRoute,
  deleteRunningRoute,
  updateRunningRoute,
};
