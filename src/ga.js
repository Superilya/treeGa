import _ from 'lodash';

export default class TreeGa {
	constructor(tree) {
		this.init(tree);
	}

	init(elements, action = []) {
		var cloneAction;

		elements.forEach((element) => {
			cloneAction = _.cloneDeep(action);
			cloneAction.push(element.title);

			if (element.alias !== undefined) {
				this[element.alias] = this.trigger.bind(this, cloneAction)
			}

			if (element.children !== undefined) {
				this.init(element.children, cloneAction);
			}
		});
	}

	trigger(action) {
		console.log(action);
	}
}