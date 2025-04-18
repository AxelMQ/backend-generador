import { Request, Response } from "express";
import { AppDataSource } from '../config/data-source';
import { Project } from '../models/Project';

const projectRepo = AppDataSource.getRepository(Project);

export const getProjects = async (req: Request, res: Response) => {
    try {
        const projects = await projectRepo.find();
        return res.json(projects);
    } catch (err) {
        console.error('Error en getProjects:', err);
        return res.status(500).json({ error: 'Error al listar proyectos.' });
    }
}

export const createProject = async (req: Request, res: Response) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({ error: 'El nombre del proyecto es obligatorio.' });
        }          
        const project = projectRepo.create(req.body);
        const result = await projectRepo.save(project);
        return res.status(201).json(result);
    } catch (err) {
        console.error('Error en createProject:', err);
        return res.status(400).json({ error: 'Error al crear Proyecto.'});
    }
}

export const getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const project = await projectRepo.findOneBy({ id: +id });
        if (!project) return res.status(404).json({ error: 'Proyecto no encontrado.' });
        return res.json(project);
    } catch (err) {
        console.error('Error en getProjectById:', err);
        return res.status(500).json({ error: 'Error al obtener proyecto.' });
    }
}

export const updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        if (!req.body.name) {
            return res.status(400).json({ error: 'El nombre del proyecto es obligatorio.' });
        }          
        await projectRepo.update(id, req.body);
        const updated = await projectRepo.findOneBy({ id: +id });
        if (!updated) return res.status(404).json({ error: 'Proyecto no encontrado.' });
        return res.json(updated);
    } catch (err) {
        console.error('Error en updateProject:', err);
        return res.status(400).json({ error: 'Error al actualizar proyecto.' });
    }
}

export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await projectRepo.delete(id);
        if (result.affected === 0) {
          return res.status(404).json({ error: 'Proyecto no encontrado.' });
        }
        return res.status(204).send();        
    } catch (err) {
        console.error('Error en deleteProject:', err);
        return res.status(500).json({ error: 'Error al eliminar proyecto.' });
    }
}

export const generateFrontend = (req: Request, res: Response) => {
    const { designData } = req.body;
    res.json({
        message: 'Codigo generado (mock)',
        html: '<div>Ejemplo</div>',
        css: 'div { color: red; }',
        angularComponent: '@Component({...})'
    });
}