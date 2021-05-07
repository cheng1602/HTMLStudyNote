//获取接口调用url
var hns_url = ""
$.ajax({
	url: baseUrl + "/dj/v1/config",
	dataType: "json",
	type: "GET",
	async: false,
	success: function(result) {
		if (result && result.success) {
			flag = true
			hns_url = result.hns_url
			dt_url = result.dt_url
		}
	}
});
//基层政务服务进驻部门与事项
$.ajax({
	url: hns_url + "/ymsdj/v1/bmsx/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var jzbm = [{
				"xz_jd": Data[1].departNum,
				"xz_jd_sxsl": Data[1].approveNum,
				"c_sq": Data[2].departNum,
				"c_sq_sxsl": Data[2].approveNum
			}];
			if (jzbm.length > 0) {
				$("#xz_jd").text(jzbm[0].xz_jd);
				$("#xz_jd_sxsl").text(jzbm[0].xz_jd_sxsl);
				$("#c_sq").text(jzbm[0].c_sq);
				$("#c_sq_sxsl").text(jzbm[0].c_sq_sxsl);
			} else {
				$("#xz_jd").text(0);
				$("#xz_jd_sxsl").text(0);
				$("#c_sq").text(0);
				$("#c_sq_sxsl").text(0);
			}
		}
	}
});
//各乡镇街道基层服务情况
$.ajax({
	url: hns_url + "/ymsdj/v1/jcfwqk/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var fwqk = [];
			for (var i = 0; i < Data.length; i++) {
				fwqk.push({
					"dqmc": Data[i].showname,
					"c_sq": Data[i].csl,
					"sxzs": Data[i].sxzs,
					"bjzs": Data[i].bjzs
				})
			}
			var fwqk_gd = '';
			clearInterval(fwqk_gd);
			$('#fwqk_table_tbody tbody').empty();

			if (fwqk.length != 0) {
				for (var i = 0; i < fwqk.length; i++) {
					$("#fwqk_table_tbody").append('<tr><td width="45%">' + toEllipsis(fwqk[i].dqmc, 14) +
						'</td><td width="25%">' + fwqk[i].c_sq + '</td><td width="15%">' + fwqk[i].sxzs +
						'</td><td width="15%">' + fwqk[i].bjzs + '</td></tr>')
				}
			}
			if (fwqk.length > 7) {
				$('#fwqk_table_tbody tbody').html($('#fwqk_table_tbody tbody').html() + $('#fwqk_table_tbody tbody').html());
				$('#fwqk_table_tbody').css('top', '0');
				var tblTop1 = 0;
				var speed1 = 160; // 数值越大越慢
				var outerHeight1 = $('#fwqk_table_tbody tbody').find("tr").outerHeight();
				//匀速滚动方法
				function ys1() {
					if (tblTop1 <= -outerHeight1 * fwqk.length) {
						tblTop1 = 0;
					} else {
						tblTop1 -= 2;
					}
					$('#fwqk_table_tbody').css('top', tblTop1 + 'px');
				}
				fwqk_gd = setInterval(ys1, speed1);
			}

			// 鼠标移上去取消滚动事件
			$("#fwqk_table_tbody tbody").hover(function() {
				clearInterval(fwqk_gd);
			}, function() {
				clearInterval(fwqk_gd);
				fwqk_gd = setInterval(ys1, speed1);
			})
		}
	}
});
//各乡镇街道基层政务服务事项排名TOP5
$.ajax({
	url: hns_url + "/ymsdj/v1/jcfwqkTop5/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var fwpm_xAxisData = [toEllipsis(toLineFeed(Data[0].showname), 5), toEllipsis(toLineFeed(Data[1].showname), 5),
				toEllipsis(toLineFeed(Data[2].showname), 5), toEllipsis(toLineFeed(Data[3].showname), 5), toEllipsis(toLineFeed(
					Data[4].showname), 5)
			];
			var fwpm_sxzs_data = [Data[0].sxzs, Data[1].sxzs, Data[2].sxzs, Data[3].sxzs, Data[4].sxzs];
			var fwpm_tbssqd_data = [Data[0].tbssqd, Data[1].tbssqd, Data[2].tbssqd, Data[3].tbssqd, Data[4].tbssqd];
			var fwpm_fwqysx_data = [Data[0].fwqysx, Data[1].fwqysx, Data[2].fwqysx, Data[3].fwqysx, Data[4].fwqysx];
			var myChart = echarts.init(document.getElementById('gxzjdjczwfwsxpmEchart'));

			// 指定图表的配置项和数据
			var option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				legend: {
					icon: 'roundRect',
					top: '2%',
					right: '5%',
					itemWidth: 20,
					itemHeight: 10,
					itemGap: 25,
					textStyle: {
						color: '#fff'
					}
				},
				grid: {
					top: '20%',
					right: '8%',
					left: '8%',
					bottom: '10%'
				},
				xAxis: [{
					type: 'category',
					data: fwpm_xAxisData,
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,0.12)'
						}
					},
					axisLabel: {
						margin: 10,
						color: '#fff',
						textStyle: {
							fontSize: 14
						},
					}
				}],
				yAxis: [{
					type: 'value',
					splitNumber: 4,
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,0.12)'
						}
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: "#fff"
						},
					},
					nameTextStyle: {
						color: "#fff"
					},
					splitArea: {
						show: false
					}
				}],
				series: [{
					name: '事项总数',
					type: 'line',
					data: fwpm_sxzs_data,
					lineStyle: {
						normal: {
							width: 5,
							color: {
								type: 'linear',

								colorStops: [{
									offset: 1,
									color: '#d3a54d' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							},

						}
					},
					itemStyle: {
						normal: {
							color: '#d3a54d'
						}
					},
					smooth: true
				}, {
					name: '填报实施清单',
					type: 'line',
					data: fwpm_tbssqd_data,
					lineStyle: {
						normal: {
							width: 5,
							color: {
								type: 'linear',

								colorStops: [{
									offset: 1,
									color: '#0debfb' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							},
						}
					},
					itemStyle: {
						normal: {
							color: '#0debfb'
						}
					},
					smooth: true
				}, {
					name: '服务前移事项',
					type: 'line',
					data: fwpm_fwqysx_data,
					lineStyle: {
						normal: {
							width: 5,
							color: {
								type: 'linear',

								colorStops: [{
									offset: 1,
									color: '#413eac' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							},
						}
					},
					itemStyle: {
						normal: {
							color: '#413eac',
						}
					},
					smooth: true
				}]

			};
			myChart.setOption(option);
		}
	}
});
//基层办件总量
$.ajax({
	url: hns_url + "/ymsdj/v1/jcbjzl/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var midData = [{
				"jczwfwbjzl": Data[0].bjzlTotal,
				"jnjcbjl": Data[0].bjzlYear,
				"byjcbjl": Data[0].bjzlMonth
			}];
			if (midData.length > 0) {
				$("#jczwfwbjzl").text(toThousands(midData[0].jczwfwbjzl));
				$("#jnjcbjl").text(toThousands(midData[0].jnjcbjl));
				$("#byjcbjl").text(toThousands(midData[0].byjcbjl));
			} else {
				$("#jczwfwbjzl").text(0);
				$("#jnjcbjl").text(0);
				$("#byjcbjl").text(0);
			}
		}

	}
});

//办件排名
$.ajax({
	url: hns_url + "/ymsdj/v1/cjbjpm/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var bjpm = [{
					"bjpm_name": toEllipsis(getStreetName(Data[0].name), 4),
					"bjpm_em": toPercent(Data[0].bjnum / Data[0].slnum),
					"bjpm_num": Data[0].slnum
				},
				{
					"bjpm_name": toEllipsis(getStreetName(Data[1].name), 4),
					"bjpm_em": toPercent(Data[1].bjnum / Data[1].slnum),
					"bjpm_num": Data[1].slnum
				},
				{
					"bjpm_name": toEllipsis(getStreetName(Data[2].name), 4),
					"bjpm_em": toPercent(Data[2].bjnum / Data[2].slnum),
					"bjpm_num": Data[2].slnum
				},
				{
					"bjpm_name": toEllipsis(getStreetName(Data[3].name), 4),
					"bjpm_em": toPercent(Data[3].bjnum / Data[3].slnum),
					"bjpm_num": Data[3].slnum
				},
				{
					"bjpm_name": toEllipsis(getStreetName(Data[4].name), 4),
					"bjpm_em": toPercent(Data[4].bjnum / Data[4].slnum),
					"bjpm_num": Data[4].slnum
				},
			]
			if (bjpm.length > 0) {
				for (var i = 0; i < bjpm.length; i++) {
					$("#bjpm" + i + "_name").text(bjpm[i].bjpm_name);
					$("#bjpm" + i + "_em").css("width", bjpm[i].bjpm_em);
					$("#bjpm" + i + "_num").text(bjpm[i].bjpm_num);
				}
			} else {
				for (var i = 0; i < 5; i++) {
					$("#bjpm" + i + "_name").text('');
					$("#bjpm" + i + "_em").css("width", "0%");
					$("#bjpm" + i + "_num").text(0);
				}
			}

		}
	}
});
//基层政务服务办件排名Top5
$.ajax({
	url: hns_url + "/ymsdj/v1/jcbjTop5/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var bjpm_xAxisData = [toEllipsis(toLineFeed(Data[0].showname), 5), toEllipsis(toLineFeed(Data[1].showname), 5),
				toEllipsis(toLineFeed(Data[2].showname), 5), toEllipsis(toLineFeed(Data[3].showname), 5), toEllipsis(toLineFeed(
					Data[4].showname), 5)
			];
			var bjpm_data = [Data[0].bjzlTotal, Data[1].bjzlTotal, Data[2].bjzlTotal, Data[3].bjzlTotal, Data[4].bjzlTotal];
			var myChart = echarts.init(document.getElementById('jczwfwbjpmEchart'));
			// 指定图表的配置项和数据
			var option = {


				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					top: '15%',
					right: '7%',
					left: '7%',
					bottom: '12%'
				},
				xAxis: [{
					type: 'category',
					data: bjpm_xAxisData,
					axisLine: {
						lineStyle: {
							color: 'rgba(255,255,255,0.12)'
						}
					},
					axisLabel: {
						margin: 10,
						color: '#e2e9ff',
						textStyle: {
							fontSize: 14
						},
					},
				}],
				yAxis: [{
					axisLine: {
						show: false,
						lineStyle: {
							color: 'rgba(255,255,255,1)'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(255,255,255,0.12)'
						}
					}
				}],
				series: [{
					type: 'bar',
					data: bjpm_data,
					barWidth: '20px',
					itemStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#04f7e3' // 0% 处的颜色
							}, {
								offset: 1,
								color: 'rgba(11, 57, 120, 0.1)' // 100% 处的颜色
							}], false),
							barBorderRadius: [30, 30, 30, 30],
						}
					}
				}]
			};

			// 使用刚指定的配置项和数据显示图表。
			myChart.setOption(option);
		}
	}
});
//热门事项top5
$.ajax({
	url: hns_url + "/ymsdj/v1/rmsxTop5/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var rmpm = [{
					"rmpm_name": toEllipsis(Data[0].approveName, 14),
					"rmpm_sll": Data[0].acceptCount,
					"rmpm_bjs": Data[0].handleCount
				},
				{
					"rmpm_name": toEllipsis(Data[1].approveName, 14),
					"rmpm_sll": Data[1].acceptCount,
					"rmpm_bjs": Data[1].handleCount
				},
				{
					"rmpm_name": toEllipsis(Data[2].approveName, 14),
					"rmpm_sll": Data[2].acceptCount,
					"rmpm_bjs": Data[2].handleCount
				},
				{
					"rmpm_name": toEllipsis(Data[3].approveName, 14),
					"rmpm_sll": Data[3].acceptCount,
					"rmpm_bjs": Data[3].handleCount
				},
				{
					"rmpm_name": toEllipsis(Data[4].approveName, 14),
					"rmpm_sll": Data[4].acceptCount,
					"rmpm_bjs": Data[4].handleCount
				}
			]
			if (rmpm.length > 0) {
				for (var i = 0; i < rmpm.length; i++) {
					$("#rmpm" + i + "_name").text(rmpm[i].rmpm_name);
					$("#rmpm" + i + "_sll").text(rmpm[i].rmpm_sll);
					$("#rmpm" + i + "_bjs").text(rmpm[i].rmpm_bjs);
				}
			} else {}
		}
	}
});
//发牌情况top5
$.ajax({
	url: hns_url + "/ymsdj/v1/fpqkTop5/" + areaCode,
	dataType: "json",
	type: "GET",
	async: true,
	success: function(result) {
		if (result.success) {
			var Data = result.data;
			var fptj = [{
				"fptj_name": toEllipsis(Data[0].showname, 14),
				"fptj_hongpai": Data[0].redSum,
				"fptj_huangpai": Data[0].greenSum,
				"fptj_yujing": Data[0].ranking
			}, {
				"fptj_name": toEllipsis(Data[1].showname, 14),
				"fptj_hongpai": Data[1].redSum,
				"fptj_huangpai": Data[1].greenSum,
				"fptj_yujing": Data[1].ranking
			}, {
				"fptj_name": toEllipsis(Data[2].showname, 14),
				"fptj_hongpai": Data[2].redSum,
				"fptj_huangpai": Data[2].greenSum,
				"fptj_yujing": Data[2].ranking
			}, {
				"fptj_name": toEllipsis(Data[3].showname, 14),
				"fptj_hongpai": Data[3].redSum,
				"fptj_huangpai": Data[3].greenSum,
				"fptj_yujing": Data[3].ranking
			}, {
				"fptj_name": toEllipsis(Data[4].showname, 14),
				"fptj_hongpai": Data[4].redSum,
				"fptj_huangpai": Data[4].greenSum,
				"fptj_yujing": Data[4].ranking
			}]
			if (fptj.length > 0) {
				for (var i = 0; i < fptj.length; i++) {
					$("#fptj" + i + "_name").text(fptj[i].fptj_name);
					$("#fptj" + i + "_hongpai").text(fptj[i].fptj_hongpai);
					$("#fptj" + i + "_huangpai").text(fptj[i].fptj_huangpai);
					$("#fptj" + i + "_yujing").text(fptj[i].fptj_yujing);
				}
			} else {}
		}
	}
});

//街道名换行
function toLineFeed(str) {
	if (str.indexOf("县") != -1) {
		var index = str.lastIndexOf("县");
		str = str.substring(index + 1, str.length);
	}
	// if (str.indexOf("县") != -1) {
	// 	var index = str.lastIndexOf("县");
	// 	str1 = str.substring(0, index + 1);
	// 	str2 = str.substring(index + 1, str.length);
	// 	str = str1 + '\n' + str2;
	// }
	return str;
}
//截取社区名
function getStreetName(str) {
	if (str.indexOf("镇") != -1) {
		var index = str.lastIndexOf("镇");
		str = str.substring(index + 1, str.length);
	} else if (str.indexOf("街道") != -1) {
		var index = str.lastIndexOf("街道");
		str = str.substring(index + 2, str.length);
	} else if (str.indexOf("乡") != -1) {
		var index = str.lastIndexOf("乡");
		str = str.substring(index + 1, str.length);
	}
	return str;
}
//超过长度省略
function toEllipsis(str, leng) {
	if (str.length > leng) {
		str = str.substring(0, leng - 1) + "...";
	}
	return str;
}
//数字格式化
function toThousands(num) {
	return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
//百分比转换
function toPercent(point) {
	var str = Number(point * 100).toFixed(1);
	str += "%";
	return str;
}
