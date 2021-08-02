/**
 * Copyright (c) 2006-2017, JGraph Ltd
 * Copyright (c) 2006-2017, Gaudenz Alder
 */
//Add a closure to hide the class private variables without changing the code a lot
(function ()
{

var _token = null;

window.NeteaseCloudMusicClient = function(editorUi, authName)
{
	DrawioClient.call(this, editorUi, authName || 'netease auth');
};

// Extends DrawioClient
mxUtils.extend(NeteaseCloudMusicClient, DrawioClient);

/**
 * Default extension for new files.
 */
NeteaseCloudMusicClient.prototype.extension = '.drawio';

 /**
 * Checks if the client is authorized and calls the next step.
 */
NeteaseCloudMusicClient.prototype.pickFile = function(fn)
{
	console.log('这里可以自定义自己的弹框');
	alert('选择你存储的图');
	const fileObj = {
		title: 'luffy',
		data: `<mxfile host="localhost" modified="2021-07-28T11:18:52.414Z" agent="5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36" etag="7FEmFtGT_w4tk5O-IUlT" version="@DRAWIO-VERSION@" type="device"><diagram id="prtHgNgQTEPvFCAcTncT" name="Page-1">7ZjBctowEIafhiOMsQN2jkCgmWnTzDRpexbWYquVJSoLDH36riw5tnFKk2lS0hlOtn6ttatd7WdDL5hlu3eKrNMbSYH3fI/uesFVz/eHoyDCi1H2VgnD0AqJYtQZ1cId+wlO9Jy6YRTylqGWkmu2bouxFAJi3dKIUrJom60kb3tdkwQ6wl1MeFf9yqhOrRr5Ya1fA0vSyvNwfGlnMlIZu53kKaGyaEjBvBfMlJTa3mW7GXCTvCov9rnFb2YfAlMg9FMeoB93+4/vwziMlh+KbU7h5nrUH7pltoRv3I5vVRKnRGkXtd5XqcgLlnEicDRNdcZRHOJtrtHW1Q0jwDmp2E8pNKksYjNgAtT9fm2stAKzRsJJbopjnunupYoLlIZdQ3J7ewcyA632aOJmL1ya3TmL3LCoixZWZyptFMy/dCJxByV5WLnOJd64dJbDzzmo2+U3c9x8j5MlcPtozx8JkgFeev6Yo4PpUuFdossdWoW1cjr+sTHlxxRxqXrBpGwDsq8n6sdHa5kzzaRoLI9xsUMHXZfEbFnBquUxI4xrWbocgRnYZQ/czu3MgzdSr21yVu623Po95Lnxc8M4B+XKWQVcWswWt1bmMia1fLtasRhT5rmC21jKKVz7woMdydYcBrHM3KqcxJBiG4NqtzZn4rsVUq0NHSamfv6iKIoBVaQYMGkNjzeE3zhlroMaPeCqPWWZ5UbbVUxFMGB43ldMYHw26AUlmphKoZ7jdYOnp0+2KKq8j7EvRsZnKef9AAOIBmuRoI8iZRru1rhddFQgXtuNp+QGnVDXQc1uMg12I7fMrFKaGmGBKauVbsMdx8OT29Aft/tw1O3DYfRIH4bPb0McNjrxOdALOtDrwA4EnZjXB46WeGK/36cMT+wU5QXjVQlWSDaHvqEZA8V3h1sD+FIW81qYlgJOmFyy2NDxoITPrEkuNyqGPx5lfF8SlcDRFS9c79HWu7BbYwUcW3fbfjWewfk34JzTgihqyCmVYrmJssvOqSKitCECsaOOctR/Ixy9OClHh97LobRNzg5cXw2lB180w0c+aR5FafQvUTo6o7RlOD6j9GQo3RIMzPuCv930YxS9/oTSFVOYM3mcodX78NQMHZ+UoZd9/39H6OHX6NtkaHhmaMswOjP0VAydcPsN6l1JIUuedjl6t881IEy8Cc2YOArS4I2ANDopSF8Eo6/3mXl5UkaiVP8HWpo3/kkO5r8A</diagram></mxfile>`
	};
	const file = new LocalFile(this.ui, fileObj.data, fileObj.title);
	// 当成草稿去加载
	// this.ui.loadDraft(fileObj.data);
	// 加载请求过来的文件
	this.ui.loadFile('-1', true, file);
	// 如果不是本人设置不可编辑
	this.ui.editor.graph.setEnabled(false);
	this.ui.hideDialog();
};

NeteaseCloudMusicClient.prototype.saveFile = function(fn)
{
	const curFile = this.ui.getCurrentFile();
	const postData = {
		data: curFile.data,
		title: curFile.title
	};
	console.log('存储到后台的数据：', postData);
	alert('数据存储成功');
};

})();