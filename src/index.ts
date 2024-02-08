// 2024-02-06
//增加3個自訂搜尋引擎
// 2023-7-28
//基本功能的Selected to Google search
// author:Joe
import joplin from 'api';
import { ChangeEvent } from 'api/JoplinSettings';
import { MenuItemLocation } from 'api/types';
import { SettingItemSubType, SettingItemType, ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {

		await joplin.settings.registerSection('WebSearchEngineSetting', {
			label: 'WebSearchEngine',
			iconName: 'fas fa-wrench',
		});
		await joplin.settings.onChange(async (event: ChangeEvent)=>{
		
		
				alert('Please restart Joplin')

		});

		await joplin.settings.registerSettings({
			'SearchEngineShow1':{
				value:1,
				type:SettingItemType.Bool,
				section:'WebSearchEngineSetting',
				public:true,
				label:'ShowSearchEngine1',
			},
			'SearchEngineNameItem1': {
				value: 'Google',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: true,
				label: '1.SearchEngineName',
			},
			'SearchEngineURLItem1': {
				value: 'https://www.google.com/search?q={searchword}',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: true,
				label: '1.SearchEngineURl',
			},
			//--------------------------------------------------
			'SearchEngineShow2':{
				value:1,
				type:SettingItemType.Bool,
				section:'WebSearchEngineSetting',
				public:true,
				label:'ShowSearchEngine2',
			},
			'SearchEngineNameItem2': {
				value: 'Youtube',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: true,
				label: '2.SearchEngineName',
			},
			'SearchEngineURLItem2': {
				value: 'https://www.youtube.com/results?search_query={searchword}',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: true,
				label: '2.SearchEngineURl',
			},
			//-------------------------3------------------------------
			'SearchEngineShow3':{
				value:0,
				type:SettingItemType.Bool,
				section:'WebSearchEngineSetting',
				public:true,
				label:'ShowSearchEngine3',
			},
			'SearchEngineNameItem3': {
				value: 'Google Play',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: true,
				label: '3.SearchEngineName',
			},
			'SearchEngineURLItem3': {
				value: 'https://play.google.com/store/search?q={searchword}&c=apps&hl=zh_TW&gl=US',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: true,
				label: '3.SearchEngineURl',
			},
			//----------------4--------------------------
			'SearchEngineShow4':{
				value:0,
				type:SettingItemType.Bool,
				section:'WebSearchEngineSetting',
				public:false,
				label:'ShowSearchEngine4',
			},
			'SearchEngineNameItem4': {
				value: '',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: false,
				label: '4.SearchEngineName',
			},
			'SearchEngineURLItem4': {
				value: '',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: false,
				label: '4.SearchEngineURl',
			},
			//-------------------------5-------------------------
			'SearchEngineShow5':{
				value:0,
				type:SettingItemType.Bool,
				section:'WebSearchEngineSetting',
				public:false,
				label:'ShowSearchEngine5',
			},
			'SearchEngineNameItem5': {
				value: '',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: false,
				label: '5.SearchEngineName',
			},
			'SearchEngineURLItem5': {
				value: '',
				type: SettingItemType.String,
				section: 'WebSearchEngineSetting',
				public: false,
				label: '5.SearchEngineURl',
			}
		})
		//--------------------1------------------------------------------------------------
		console.info('Search plugin started!');
		await joplin.commands.register({
			name: 'commands1',
			label: await joplin.settings.value('SearchEngineNameItem1'),
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);
				var SearchEngine1Url=await joplin.settings.value('SearchEngineURLItem1');
				var keyword= /{searchword}/gi;
				var newUrl=SearchEngine1Url.replace(keyword,selectedText);
				console.info(newUrl)
				const result=newUrl

				await joplin.commands.execute('openItem',result);
			},
		});
		var a=await joplin.settings.value('SearchEngineShow1');
		console.info(a);
		if(a==true)
		{
			await joplin.views.menuItems.create('WebSearchEngineItem1','commands1', MenuItemLocation.EditorContextMenu);
			
		}
//----------------------------------------------2---------------------------------------------------
		await joplin.commands.register({
			name: 'commands2',
			label: await joplin.settings.value('SearchEngineNameItem2'),
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);
				var SearchEngine1Url=await joplin.settings.value('SearchEngineURLItem2');
				var keyword= /{searchword}/gi;
				var newUrl=SearchEngine1Url.replace(keyword,selectedText);
				console.info(newUrl)
				const result=newUrl

				await joplin.commands.execute('openItem',result);
			},
		});
		if(await joplin.settings.value('SearchEngineShow2')==true)
		{
			await joplin.views.menuItems.create('WebSearchEngineItem2','commands2', MenuItemLocation.EditorContextMenu);
			
		}
//-----------------------------------3---------------------------------------------------------
		await joplin.commands.register({
			name: 'commands3',
			label: await joplin.settings.value('SearchEngineNameItem3'),
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);
				var SearchEngine1Url=await joplin.settings.value('SearchEngineURLItem3');
				var keyword= /{searchword}/gi;
				var newUrl=SearchEngine1Url.replace(keyword,selectedText);
				console.info(newUrl)
				const result=newUrl

				await joplin.commands.execute('openItem',result);
			},
		});
		if(await joplin.settings.value('SearchEngineShow3')==true)
		{
			await joplin.views.menuItems.create('WebSearchEngineItem3','commands3', MenuItemLocation.EditorContextMenu);
			
		}
//-------------------------------------------------4------------------------------------------
		await joplin.commands.register({
			name: 'commands4',
			label: await joplin.settings.value('SearchEngineNameItem4'),
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);
				var SearchEngine1Url=await joplin.settings.value('SearchEngineURLItem4');
				var keyword= /{searchword}/gi;
				var newUrl=SearchEngine1Url.replace(keyword,selectedText);
				console.info(newUrl)
				const result=newUrl

				await joplin.commands.execute('openItem',result);
			},
		});
		if(await joplin.settings.value('SearchEngineShow4')==true)
		{
			await joplin.views.menuItems.create('WebSearchEngineItem4','commands4', MenuItemLocation.EditorContextMenu);
			
		}
//------------------------------5--------------------------------------------------------------
		await joplin.commands.register({
			name: 'commands5',
			label: await joplin.settings.value('SearchEngineNameItem5'),
			execute: async () => {
				const selectedText = (await joplin.commands.execute('selectedText') as string);
				var SearchEngine1Url=await joplin.settings.value('SearchEngineURLItem5');
				var keyword= /{searchword}/gi;
				var newUrl=SearchEngine1Url.replace(keyword,selectedText);
				console.info(newUrl)
				const result=newUrl

				await joplin.commands.execute('openItem',result);
			},
		});
		if(await joplin.settings.value('SearchEngineShow5')==true)
		{
			await joplin.views.menuItems.create('WebSearchEngineItem5','commands5', MenuItemLocation.EditorContextMenu);
			
		}



	},
});
