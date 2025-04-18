import { Request, Response } from "express";

export const getProjects = (req: Request, res: Response) => {
    res.json({ message: 'Lista de proyecto (mock)'});
}

export const createProject = (req: Request, res: Response) => {
    const { name } = req.body;
    res.status(201).json({ message: `Proyecto '${name}' creado (mock)` });
}

export const getProjectById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Detalles del proyecto con Id ${id} (mock)`})
}

export const updateProject = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Proyecto ${id} actualizado a '${name}' (mock)`});
}

export const deleteProject = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Proyecto ${id} eliminado (mock)`});
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