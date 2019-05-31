		//格式化的指定格式的日期和时间--封装一个函数
		function getDate(dt){
			// 获取年
			var year=dt.getFullYear();
			// 获取月
			var month=dt.getUTCMonth()+1;
			// 获取日
			var day=dt.getDate();
			// 获取小时
			var hour=dt.getHours();
			// 获取分钟
			var min=dt.getMinutes();
			// 获取秒
			var seconds=dt.getSeconds();

			month=month<10?"0"+month:month;
			day=day<10?"0"+day:day;
			hour=hour<10?"0"+hour:hour;
			min=min<10?"0"+min:min;
			seconds=seconds<10?"0"+seconds:seconds;

			return year+"年"+month+"月"+day+"日 "+hour+":"+min+":"+seconds;
		}