/** @odoo-module **/

import { registry } from "@web/core/registry";
import { listView } from "@web/views/list/list_view";
import { ListController } from "@web/views/list/list_controller";

class ResPartnerListController extends ListController {
  setup() {
    super.setup();
    console.log("ResPartnerListController is Working");
  }
}

export const resPartnerListController = {
  ...listView, 
  Controller: ResPartnerListController,
  buttonTemplate: "owl_dev.web.ListView.Buttons.inherit",
};

registry.category("views").add("res_partner_list_controller", resPartnerListController);
