# -*- coding: utf-8 -*-
{
    'name': "owl_dev",

    'summary': "OWL FrameWork Development Environment",

    'description': """
        OWL Course Development
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'point_of_sale'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        # 'views/partner_tree.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_dev/static/src/componentes/todo_list/*.js',
            'owl_dev/static/src/componentes/todo_list/*.xml',
            'owl_dev/static/src/componentes/todo_list/*.css',
        ],
        'point_of_sale._assets_pos': [
            'owl_dev/static/src/componentes/payment/*.js',
            'owl_dev/static/src/componentes/payment/*.xml',
        ],

    }

}
