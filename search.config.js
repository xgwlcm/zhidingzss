Search.defaults = {};

Search.defaults.langCode = "zh-cn";
Search.defaults.category = "prefered";
Search.defaults.saveHistory = 20;
Search.defaults.loadAll = 0;

Search.defaults.preferedList = {};

Search.defaults.preferedList["en-us"] = [
	{c: "video", n: "aiqiyi"},
    {c: "video", n: "bilibili"},
	{c: "video", n: "sougouvideo"},
	{c: "video", n: "bilibili"},
	{c: "video", n: "baiduvideo"},
	{c: "video", n: "tengxunshiping"},
	{c: "video", n: "bingvideo"},
	{c: "video", n: "cctvvideo"},
	{c: "video", n: "360video"},
	{c: "video", n: "haokan"}
]

Search.defaults.preferedList["zh-cn"] = [
	{c: "video", n: "aiqiyi"},
    {c: "video", n: "bilibili"},
	{c: "video", n: "sougouvideo"},
	{c: "video", n: "bilibili"},
	{c: "video", n: "baiduvideo"},
	{c: "video", n: "tengxunshiping"},
	{c: "video", n: "bingvideo"},
	{c: "video", n: "cctvvideo"},
	{c: "video", n: "360video"},
	{c: "video", n: "haokan"}

	
]


//**********************************************************************
// Search Engine Lists
//**********************************************************************
Search.localeList = {};

//**********************************************************************
// English
//**********************************************************************
/*Search.localeList["en-us"] = {};



Search.localeList["en-us"]["image"] = {
	"title": "Images",

	"items": {
		"yahoo": { title: "Yahoo!", subtitle: "(网页)",top:0,waptop:0,
			url: "https://images.search.yahoo.com/search/images?p={keyword}",wapurl: "https://images.search.yahoo.com/search/images?p={keyword}" }

	}
}
*/


//**********************************************************************
// 简体中文
//**********************************************************************
Search.localeList["zh-cn"] = {};

Search.localeList["zh-cn"]["web"] = {
	"title": "网页",
	"items": {
		"bing": { title: "必应",isgeturl:0,iswapgeturl:0,top:-150,waptop:-110,                     	
		url: "https://cn.bing.com/search?q={keyword}",wapurl: "https://cn.bing.com/search?q={keyword}" },
		
		"baidu": { title: "百度",isgeturl:0,iswapgeturl:0,top:-104,waptop:-110, 	                
		url: "https://www.baidu.com/s?wd={keyword}",wapurl: "https://m.baidu.com/s?wd={keyword}" },
		
		"guge": { title: "谷歌",isgeturl:0,iswapgeturl:0,top:-80,waptop:-110,		
		url: "https://www.google.com/search?start=0&num=10&igu=1&newwindow=1&q={keyword}",wapurl: "https://www.google.com/search?start=0&num=10&igu=1&newwindow=1&q={keyword}" },
	
		"soso": { title: "微信",isgeturl:0,iswapgeturl:0,top:-100,waptop:-120,			            
		url: "https://weixin.sogou.com/weixin?type=2&query={keyword}",wapurl: "https://weixin.sogou.com/weixinwap?type=2&query={keyword}" },
		
		"kuake": { title: "夸克",isgeturl:0,iswapgeturl:0,top:-70,waptop:-100,			        
		url: "https://quark.sm.cn/s?q={keyword}",wapurl: "https://quark.sm.cn/s?q={keyword}" },
				
		"toutiao": { title: "头条",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,			        
		url: "https://so.toutiao.com/search?keyword={keyword}",wapurl: "https://so.toutiao.com/search?keyword={keyword}" },
		
        "Goobe": { title: "Goobe", isgeturl:0,iswapgeturl:0,top:-107,waptop:-130,                  
		url: "https://goobe.io/search.aspx?k={keyword}",wapurl: "https://goobe.io/search.aspx?k={keyword}" },
		
		"erciyuan": { title: "二次元",isgeturl:0,iswapgeturl:0,top:-65,waptop:-65,	
		url: "https://www.acgice.com/?l=web&q={keyword}",wapurl: "https://www.acgice.com/?l=web&q={keyword}" },
		
		"haosou": { title: "360",isgeturl:0,iswapgeturl:0,top:-128,waptop:-100,			        
		url: "https://www.so.com/s?q={keyword}",wapurl: "https://www.so.com/s?q={keyword}" },
		
		"sogou": { title: "搜狗",isgeturl:0,iswapgeturl:0,top:-100,waptop:-105,	
		url: "https://www.sogou.com/web?pid=yuzi&query={keyword:gb2312}",wapurl: "https://www.sogou.com/web?pid=yuzi&query={keyword:gb2312}" },
		
			"guosou": { title: "国搜",isgeturl:0,iswapgeturl:0,top:-128,waptop:-105,			        
		url: "http://www.chinaso.com/search/pagesearch.htm?q={keyword}",wapurl: "http://m.chinaso.com/page/search.htm?keys={keyword}" }

	}
}

/*4月1日检测失效
"duoji": { title: "多吉",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110, 	                
		url: "https://rmt.dogedoge.com/results?q={keyword}",wapurl: "https://rmt.dogedoge.com/results?q={keyword}"},*/

Search.localeList["zh-cn"]["yingshi"] = {
	"title": "影视",
	"items": {

		"dianyinggou": { title: "电影狗",isgeturl:0,iswapgeturl:0,	top:-248,waptop:-242,		
		url: "https://www.dianyinggou.com/so/{keyword}",wapurl: "https://www.dianyinggou.com/so/{keyword}" },
		
		"chabeihu": { title: "茶杯狐",isgeturl:0,iswapgeturl:0,	top:-70,waptop:-110,		
		url: "https://www.ccupfox.com/search.php?searchword={keyword}",wapurl: "https://www.ccupfox.com/search.php?searchword={keyword}" },
		
		"bidi": { title: "哔嘀高清",isgeturl:0,iswapgeturl:0,top:-70,waptop:-70,	
		url: "https://www.huohutv.net/vod-search.html?wd={keyword}",wapurl: "https://www.huohutv.net/vod-search.html?wd={keyword}" },
		
	    /*2021年5月16日检测失效	
			"116kan": { title: "116解析",isgeturl:0,iswapgeturl:0,	top:-0,waptop:-0,		
		url: "https://vip.116kan.com/index.php?wd={keyword}",wapurl: "https://vip.116kan.com/index.php?wd={keyword}" },
		
			    	"kusoudianyin": { title: "酷搜电影",isgeturl:0,iswapgeturl:0,	top:-240,waptop:-245,		
		url: "https://www.kolsou.com/search?q={keyword}&m=2",wapurl: "https://www.kolsou.com/search?q={keyword}&m=2" },
		
			"k1080": { title: "K1080",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,		
		url: "https://www.k1080.net/vodsearch/-------------.html?wd={keyword}",wapurl: "https://www.k1080.net/vodsearch/-------------.html?wd={keyword}" },
		
		*/

		

	}
}



Search.localeList["zh-cn"]["music"] = {
	"title": "音乐",
	"items": {
	
	  "mianfeimp3": { title: "免费MP3",isgeturl:0,iswapgeturl:0,top:0,waptop:0,			
	url: "http://tool.liumingye.cn/music/?page=audioPage&type=YQB&name={keyword}",wapurl: "http://tool.liumingye.cn/music/?page=audioPage&type=YQB&name={keyword}" },
	
	"quanwangmusic": { title: "全音乐",	isgeturl:0,iswapgeturl:0,top:-340,waptop:-400,	    
	url: "https://music.liuzhijin.cn/?name={keyword}&type=netease",wapurl: "https://music.liuzhijin.cn/?name={keyword}&type=netease" },
	
	
	"mianfeimp3new": { title: "免费MP3",isgeturl:0,iswapgeturl:0,top:0,waptop:0,			
	url: "https://music.liumingye.cn/search/{keyword}",wapurl: "https://music.liumingye.cn/search/{keyword}" },		
	
	}
}


Search.localeList["zh-cn"]["soft"] = {
	"title": "软件",
	"items": {		
		
		"wandoujia": {title: "豌豆荚",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,		
		url: "https://www.wandoujia.com/search?key={keyword}",wapurl: "https://www.wandoujia.com/search?key={keyword}" },
		
		
		"tencentsoft": {title: "腾讯软件",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,		
		url: "https://pc.qq.com/search.html#!keyword={keyword}",wapurl: "https://mobile.baidu.com/search?w={keyword}" }
	}
}




Search.localeList["zh-cn"]["wangpan"] = {
	"title": "网盘",
	"items": {
	    "wosouyun": { title: "我搜云盘",isgeturl:0,iswapgeturl:0,top:-70,waptop:-170,		
		url: "https://www.wosouyun.com/wd/{keyword}",wapurl: "https://m.wosouyun.com/wd/{keyword}" },
		
		"wenjiansou": { title: "文件搜",isgeturl:0,iswapgeturl:0,top:-60,waptop:-60,			
		url: "http://wjsou.com/s2/{keyword}.html",wapurl: "http://wjsou.com/s2/{keyword}.html" },
		
		"xiaobaipan": { title: "小白盘",isgeturl:0,iswapgeturl:0,top:-230,waptop:-320,			
		url: "https://www.xiaobaipan.com/list-{keyword}.html?from=1",wapurl: "https://www.xiaobaipan.com/list-{keyword}.html?from=1" },
		
		"weipan": { title: "微盘搜",isgeturl:0,iswapgeturl:0,top:-180,waptop:-190,			
		url: "https://www.xiaoso.net/m/search?wd={keyword}",wapurl: "https://www.xiaoso.net/m/search?wd={keyword}" },
		


		}
}


Search.localeList["zh-cn"]["souti"] = {
	"title": "搜题",
	"items": {
						"baidutiku": { title: "百度题库",	isgeturl:0,iswapgeturl:0,top:-110,waptop:-154,		                
		url: "https://www.baidu.com/s?wd={keyword}+site:tiku.baidu.com",wapurl: "https://www.baidu.com/s?wd={keyword}+site:tiku.baidu.com" },
		
		
	
		"wendaku": { title: "问答库",isgeturl:0,iswapgeturl:0,	top:-185,waptop:-120,	            
		url: "https://www.asklib.com/s/{keyword}",wapurl: "https://m.asklib.com/s/{keyword}" },
				
				
		"89wendaku": { title: "89问答库",isgeturl:0,iswapgeturl:0,	top:-350,waptop:-100,	            
		url: "https://en89.com/search?keyword={keyword}",wapurl: "https://en89.com/search?keyword={keyword}" },
		
	}
}


Search.localeList["zh-cn"]["youxi"] = {
	"title": "游戏",
	"items": {
				"kaixindianwan": { title: "开心电玩",isgeturl:0,iswapgeturl:0,top:-226,waptop:-120,			        
		url: "http://www.kxdw.com/index.php?m=content&c=my_search&a=init&modelid=12&q={keyword}",wapurl: "http://m.kxdw.com/index.php?m=content&c=my_search&a=index&modelid=0&q={keyword}&typeid=2" },
		
			
		"duoduo": { title: "多多",isgeturl:0,iswapgeturl:0,	top:-200,waptop:-100,	            
		url: "http://search.ddooo.com/pc/{keyword}_1_1_1.html",wapurl: "http://search.ddooo.com/mm/{keyword}_1.html" },
		
		"k7youxi": { title: "K7游戏",isgeturl:0,iswapgeturl:0,	top:-190,waptop:-200,	            
		url: "http://www.k73.com/search.php?tn=soft&word={keyword}&submit=yes",wapurl: "http://m.k73.com/search.php?tn=soft&image=1&word={keyword}" },
		
		
		"Fyouxi": { title: "F游戏",	isgeturl:0,iswapgeturl:0,top:-120,waptop:-100,		                
		url: "https://www.fgame.top/?s={keyword}",wapurl: "https://www.fgame.top/?s={keyword}" },
		
			"shudan": { title: "网页游戏",	isgeturl:0,iswapgeturl:0,top:-210,waptop:-150,		                
		url: "http://so2.4399.com/search/search.php?k={keyword}",wapurl: "http://www.4399.cn/search.html?type=game&w={keyword}" },
		
			"youxizixun": { title: "游戏资讯",	isgeturl:0,iswapgeturl:0,top:-170,waptop:-100,		                
		url: "http://search.games.sina.com.cn/search/index/{keyword}",wapurl: "http://search.games.sina.com.cn/search/index/{keyword}" }
		

	}
}

Search.localeList["zh-cn"]["zhishi"] = {
	"title": "知识",
	"items": {
		"zhihu": { title: "知乎",isgeturl:0,iswapgeturl:0,top:-125,waptop:-148,			        
		url: "https://www.baidu.com/s?wd=site:(zhihu.com){keyword}",wapurl: "https://www.baidu.com/s?wd=site:(zhihu.com){keyword}" },
		
		
		"baidubaike": { title: "百度百科", isgeturl:0,iswapgeturl:0,top:-220,waptop:-110,	
		url: "https://baike.baidu.com/item/{keyword}",wapurl: "https://baike.baidu.com/item/{keyword}" },
			
		"toutiaobaike": { title: "头条百科",isgeturl:0,iswapgeturl:0,	top:-65,waptop:-45,	            
		url: "https://www.baike.com/wiki/{keyword}",wapurl: "https://m.baike.com/wiki/{keyword}" },
		
		"sougoubaike": { title: "搜狗百科",isgeturl:0,iswapgeturl:0,	top:-100,waptop:-45,	            
		url: "https://www.sogou.com/sogou?query={keyword}&ie=utf8&insite=baike.sogou.com",wapurl: "https://baike.sogou.com/m/fullLemma?key={keyword}&sid=&size=10&g_ut=3" },	
		
		"baiduzhidao": { title: "百度知道",	isgeturl:0,iswapgeturl:0,top:-110,waptop:-45,		                
		url: "https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=utf-8&word={keyword}",wapurl: "https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=utf-8&word={keyword}" },
				

	}
}

Search.localeList["zh-cn"]["xueshu"] = {
	"title": "学术",
	"items": {
		
		"aixueshu": { title: "爱学术",isgeturl:0,iswapgeturl:0,	top:-110,waptop:-130,	            
		url: "https://www.ixueshu.com/search/index.html?search_type=&q={keyword}",wapurl: "https://www.ixueshu.com/h5/search.html?q={keyword}" },
		
		
		
		"bingxueshu": { title: "必应学术",isgeturl:0,iswapgeturl:0,top:-150,waptop:-100,			        
		url: "https://cn.bing.com/academic/search?q={keyword}",wapurl: "https://cn.bing.com/academic/search?q={keyword}" },
						
		"xmol": { title: "X-MOL",isgeturl:0,iswapgeturl:0,	top:-190,waptop:-120,	            
		url: "https://www.x-mol.com/paper/search/q?option={keyword}",wapurl: "https://m.x-mol.com/search/paper/{keyword}" },
	
		
	}
}




Search.localeList["zh-cn"]["wenku"] = {
	"title": "文库",
	"items": {
		
		
		"daokebaba": { title: "道客巴巴",isgeturl:0,iswapgeturl:0,top:-66,waptop:-70,			
		url: "https://www.doc88.com/tag/{keyword}",wapurl: "https://www.doc88.com/tag/{keyword}" },
		
		"mianfeiwendang": { title: "文档大全",isgeturl:0,iswapgeturl:0,top:-148,waptop:-50,			
		url: "http://www.1mpi.com/search/{keyword}",wapurl: "http://m.1mpi.com/search/{keyword}" },
		
		"doudingwenku": { title: "豆丁文库",isgeturl:0,iswapgeturl:0,top:-110,waptop:-60,		
		url: "https://www.docin.com/search.do?nkey={keyword}",wapurl: "https://www.docin.com/touch_new/search.do?rkey={keyword}" },
			
		"renrenwenku": { title: "人人文库",isgeturl:0,iswapgeturl:0,top:-200,waptop:-90,		
		url: "https://www.renrendoc.com/search.html?q={keyword}",wapurl: "https://m.renrendoc.com/search.html?q={keyword}" },
		
		"tiantianwenku": { title: "天天文库",isgeturl:0,iswapgeturl:0,top:-120,waptop:0,		
		url: "https://www.so.com/s?q={keyword}&ie=utf8&src=zz_wenku365.com&site=wenku365.com&rg=1",wapurl: "https://www.so.com/s?q={keyword}&ie=utf8&src=zz_wenku365.com&site=wenku365.com&rg=1" },		
		
		"PPT": { title: "PPT",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:ppt {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:ppt {keyword}" },
		
		"doc": { title: "word",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:doc {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:doc {keyword}" },

		"pdf": { title: "pdf",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:pdf {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:pdf {keyword}" },
			
		"excel": { title: "excel",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:xls {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:xls {keyword}" },
		
		"txt": { title: "txt",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:txt {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:txt {keyword}" }
		

		}
}


Search.localeList["zh-cn"]["video"] = {
	"title": "视频",
	"items": {
				"aiqiyi": { title: "爱奇艺",isgeturl:0,iswapgeturl:0,top:-148,waptop:-90,		
		url: "https://so.iqiyi.com/so/q_{keyword}",wapurl: "https://so.iqiyi.com/so/q_{keyword}" },
		
				"bilibili": { title: "B站",isgeturl:0,iswapgeturl:0,top:-140,waptop:-130,		
		url: "https://search.bilibili.com/all?keyword={keyword}",wapurl: "https://m.bilibili.com/search?keyword={keyword}" },
		
		"sougouvideo": { title: "搜狗视频",isgeturl:0,iswapgeturl:0,top:-148,waptop:-120,		
		url: "https://v.sogou.com/v?query={keyword}",wapurl: "https://wapv.sogou.com/v?rcer=E4yQKsCg&ie=utf8&query={keyword}" },
		
		
			"baiduvideo": { title: "百度视频",isgeturl:0,iswapgeturl:0,top:-100,waptop:-140,			
		url: "https://www.baidu.com/sf/vsearch?pd=video&wd={keyword}",wapurl: "https://www.baidu.com/sf/vsearch?pd=video&word={keyword}&atn=index" },
		
		"bingvideo": { title: "必应视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-140,			
		url: "https://cn.bing.com/video/results.aspx?q={keyword}",wapurl: "https://cn.bing.com/video/results.aspx?q={keyword}" },
		
		"cctvvideo": { title: "央视视频",isgeturl:0,iswapgeturl:0,top:-114,waptop:-110,			
		url: "https://v.cctv.com/sousuo/index.shtml?title={keyword}",wapurl: "https://v.cctv.com/sousuo/index.shtml?title={keyword}&pd=video " },
			
		"360video": { title: "360视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "https://video.360kan.com/v?q={keyword}",wapurl: "https://m.video.360kan.com/s?src=m_www&q={keyword}" },
		
		"haokan": { title: "好看视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-90,			
		url: "https://haokan.baidu.com/web/search/page?query={keyword}",wapurl: "https://haokan.baidu.com/videoui/page/search/result?pagefrom=https%3A%2F%2Fhaokan.baidu.com%2F%3Ftimestamp%3D1626487376700&keyword={keyword}"}
		
	}
}


Search.localeList["zh-cn"]["images"] = {
	"title": "图片",
	"items": {
		"bing": { title: "必应图片", isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,	
		url: "https://cn.bing.com/images/results.aspx?q={keyword}",wapurl: "https://cn.bing.com/images/results.aspx?q={keyword}" },
		
		"baidutu": { title: "百度图片",isgeturl:0,iswapgeturl:0,top:-100,waptop:-155,			        
		url: "https://image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word={keyword}",wapurl: "https://image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word={keyword}" },
		
		"sougoutu": { title: "搜狗图片",isgeturl:0,iswapgeturl:0,	top:-100,waptop:-100,	            
		url: "https://pic.sogou.com/pics?query={keyword:gb2312}",wapurl: "https://pic.sogou.com/pics?query={keyword:gb2312}" },
		
		"360tu": { title: "360图片",	isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,		                
		url: "https://image.so.com/i?q={keyword}",wapurl: "https://image.so.com/i?q={keyword}" }
	}
}






Search.localeList["zh-cn"]["fanyi"] = {
	"title": "翻译",
	"items": {
						"sougoufanyi": { title: "搜狗翻译",isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,			
		url: "https://fanyi.sogou.com/?fr=websearch_submit&pid=&keyword={keyword}",wapurl: "https://fanyi.sogou.com/?fr=websearch_submit&pid=&keyword={keyword}" },
		
				"youdaofanyi": { title: "有道翻译",isgeturl:0,iswapgeturl:0,top:-180,waptop:-100,			
		url: "https://www.youdao.com/w/eng/{keyword}/#keyfrom=dict2.index",wapurl: "https://m.youdao.com/dict?le=eng&q={keyword}" },
		
				"360fanyi": { title: "360翻译",isgeturl:0,iswapgeturl:0,top:-110,waptop:-50,			
		url: "https://fanyi.so.com/?src=tab_www#{keyword}",wapurl: "https://fanyi.so.com/?src=tab_www#{keyword}" },
			
					"weiruanfanyi": { title: "微软翻译",isgeturl:0,iswapgeturl:0,top:-120,waptop:-100,			
		url: "https://cn.bing.com/translator?ref=TThis&&text={keyword}&from=en&to=zh-Hans",wapurl: "https://cn.bing.com/translator?ref=TThis&&text={keyword}&from=en&to=zh-Hans" }

		}
}



Search.localeList["zh-cn"]["yiliao"] = {
	"title": "医疗",
	"items": {
		
		"xunyiwenyao": { title: "寻医问药",isgeturl:0,iswapgeturl:0,top:-110,waptop:-120,		
		url: "http://so.xywy.com/comse.php?keyword={keyword}",wapurl: "http://m.so.xywy.com/comse.php?keyword={keyword}" },
		
		"39jibing": { title: "39疾病",isgeturl:0,iswapgeturl:0,top:-150,waptop:-150,			
		url: "http://jbk.39.net/bw/key={keyword}",wapurl: "http://wapjbk.39.net/bw/key={keyword}" },
		
		"sougoumingyi": { title: "搜狗明医",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,			
		url: "https://www.sogou.com/web?query={keyword}&ie=utf8&from=mingyi_index&m2web=mingyi.sogou.com",wapurl: "https://www.sogou.com/web?query={keyword}&ie=utf8&from=mingyi_index&m2web=mingyi.sogou.com" },
		
		"youwenbida": { title: "有问必答",isgeturl:0,iswapgeturl:0,top:-140,waptop:-70,			
		url: "http://so.120ask.com/?kw={keyword}",wapurl: "http://m.120ask.com/indexg/search?keyword={keyword}" },
			
		"360liangyi": { title: "360良医",isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,			
		url: "https://ly.so.com/s?q={keyword}",wapurl: "https://ly.so.com/s?q={keyword}" },
				
		"haodaifu": { title: "好大夫",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,			
		url: "https://so.haodf.com/index/search?type=&kw={keyword}",wapurl: "https://so.haodf.com/index/search?type=&kw={keyword}" },
		
		"chunyuyisheng": { title: "春雨医生",isgeturl:0,iswapgeturl:0,top:-185,waptop:-100,			
		url: "https://www.chunyuyisheng.com/pc/search/?query={keyword}",wapurl: "https://m.chunyuyisheng.com/m/search/?query={keyword}" },
		

		}
}

Search.localeList["zh-cn"]["shangye"] = {
	"title": "商业",
	"items": {
		"tianyancha": { title: "天眼查",isgeturl:0,iswapgeturl:0,top:-100,waptop:-130,		
		url: "https://www.tianyancha.com/search?key={keyword}",wapurl: "https://www.tianyancha.com/search?key={keyword}" },
		
		
		"shuqian": { title: "书签地球",isgeturl:0,iswapgeturl:0,top:-96,waptop:-100,		
		url: "https://www.bookmarkearth.com/s/search?q={keyword}",wapurl: "https://www.bookmarkearth.com/s/search?q={keyword}" },
		
		

		}
}


Search.localeList["zh-cn"]["news"] = {
	"title": "热点",
	"items": {
		"zhongshou": { title: "搜狗新闻",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,	    url: "https://news.sogou.com/news?query={keyword}",wapurl: "https://news.sogou.com/news?query={keyword}" },
		"360news": { title: "360资讯",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,		url: "https://news.so.com/ns?q={keyword:gb2312}",wapurl: "https://news.so.com/ns?q={keyword:gb2312}" }
	}
}