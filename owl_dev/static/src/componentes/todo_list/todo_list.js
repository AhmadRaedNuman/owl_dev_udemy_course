/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component, useState, onWillStart, useRef } = owl;
import { useService } from "@web/core/utils/hooks";

export class OwlDevTodoList extends Component {
  setup() {
    this.state = useState({
      task: { name: "", color: "#FFFFFF", completed: false },
      TaskList: [],
      isEdit: false,
      activeId: false,
    });

    this.orm = useService("orm");
    this.model = "owl_dev.todo_list";
    this.searchInput = useRef("search-input");
    onWillStart(async () => {
      await this.getAllTask();
    });
  }

  async getAllTask() {
    this.state.TaskList = await this.orm.searchRead(
      this.model,
      [], // this is for conditions
      ["name", "color", "completed"]
    );
  }
  addTask() {
    this.clearTask();
    this.state.activeId = false;
    this.state.isEdit = false;
  }

  editTask(task) {
    this.state.activeId = task.id;
    this.state.isEdit = true;
    this.state.task = { ...task };
  }

  async saveTask() {
    console.log(this.state.task);
    if (this.state.isEdit) {
      await this.orm.write(this.model, [this.state.activeId], this.state.task);
    } else {
      await this.orm.create(this.model, [
        {
          name: this.state.task.name,
          color: this.state.task.color,
          completed: this.state.task.completed,
        },
      ]);
    }
    await this.getAllTask();
  }

  clearTask() {
    this.state.task = {
      name: "",
      color: "#000000",
      completed: false,
    };
  }
  async deleteTask(task) {
    await this.orm.unlink(this.model, [task.id]);
    await this.getAllTask();
    this.clearTask();
  }

  async searchTask() {
    const text = this.searchInput.el.value;
    this.state.TaskList = await this.orm.searchRead(this.model, [
      ["name", "ilike", text],
    ]);
  }
  async uncheckedTask(e, task) {
    await this.orm.write(this.model, [task.id], {
      completed: e.target.checked,
    });
    await this.getAllTask();
  }

  async updateColor(e, task) {
    await this.orm.write(this.model, [task.id], {
      color: e.target.value,
    });
    await this.getAllTask();
  }

}
OwlDevTodoList.template = "owl_dev.TodoList";
registry.category("actions").add("owl_dev.action_todo_list_js", OwlDevTodoList);
