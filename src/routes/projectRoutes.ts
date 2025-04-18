import { Router } from "express";
import {
    getProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject,
    generateFrontend
} from '../controllers/projectController';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.get('/projects/:id', getProjectById);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.post('/generate', generateFrontend);

export default router;
