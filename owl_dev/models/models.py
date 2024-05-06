# -*- coding: utf-8 -*-

from odoo import models, fields, api


class OwlDev(models.Model):
    _name = 'owl_dev.todo_list'
    _description = 'owl todo list'

    name = fields.Char('Task name')
    context = fields.Text('Note')
    completed = fields.Boolean('Completed')
    color = fields.Char('Color')
