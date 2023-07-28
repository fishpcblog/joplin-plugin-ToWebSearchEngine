// 2023-7-28
//基本功能的Selected to Google search
// author:Joe
import joplin from 'api';
import { MenuItemLocation } from 'api/types';
joplin.plugins.register({
	onStart: async function() {
		//eslint-disable-next-line no-console
		console.info('To Google search plugin started!');
		await joplin.commands.register({
			name: 'To Google search',
			label: 'To Google search',
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);
				const result='https://www.google.com/search?q='+selectedText
				await joplin.commands.execute('openItem',result);
			},
		});
		await joplin.views.menuItems.create('GoogleSearchItem', 'To Google search', MenuItemLocation.EditorContextMenu);
	},
});
