<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		<link rel="stylesheet" href="css/base.css" />
		<link rel="stylesheet" href="css/yimenshi.css" />
		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript">
			var baseUrl = "<%=request.getContextPath()%>";
			var areaCode = "<%=request.getParameter("areaCode")%>"
		</script>

		<style type="text/css">
			@font-face {
				font-family: 'font1';
				src: url(img/DIN.eot?v=1.0.2);
				src: url(img/DIN.eot?v=1.0.2#iefix) format('embedded-opentype'),
					url(img/DIN.ttf?v=1.0.2) format('truetype')
			}

			@font-face {
				font-family: 'font2';
				src:
					url(img/DS-DigitalBold.TTF?v=1.0.2) format('truetype')
			}
		</style>

		<script src="<%=request.getContextPath()%>/dsjpt/js/echarts.min.js" type="text/javascript"></script>
		<script src="<%=request.getContextPath()%>/dsjpt/js/public_llz.js" type="text/javascript"></script>


	</head>
	<body>
		<div class="bg">
			<div class="header">
				<div class="header_lf">
					<img src="img/logo.png" />
				</div>
				<div class="header_rg">
					<a>总体概况</a>
					<a>好差评</a>
					<a>市政大厅</a>
					<a class="active">一门式</a>
				</div>
			</div>

			<div class="main clearfix">
				<div class="left">
					<!--基层政务服务进驻部门与事项-->
					<div class="jinZhuBuMen">
						<div class="titleBox">基层政务服务进驻部门与事项</div>
						<div class="jinZhuBuMenBox">
							<div class="jinZhuBuMenItem">
								<img src="img/yms_jinZhuBuMenItem1.png" alt="" />
								<em>
									<span id="xz_jd"></span>
									<font>乡镇(街道)</font>
								</em>
								<em>
									<span id="xz_jd_sxsl"></span>
									<font>事项数量</font>
								</em>
							</div>
							<div class="jinZhuBuMenItem">
								<img src="img/yms_jinZhuBuMenItem2.png" alt="" />
								<em>
									<span id="c_sq"></span>
									<font>村(社区)</font>
								</em>
								<em>
									<span id="c_sq_sxsl"></span>
									<font>事项数量</font>
								</em>
							</div>
						</div>
					</div>

					<!--各乡镇街道基层服务情况-->
					<div class="fuWuQingKuang">
						<div class="titleBox">各乡镇街道基层服务情况</div>
						<div class="fwqk_tb_header">
							<table border="0" cellspacing="0" cellpadding="0" class="fwqk_table_thead" id="fwqk_table_thead">

								<thead>
									<tr>
										<th width="45%">地区名称</th>
										<th width="25%">村（社区）</th>
										<th width="15%">事项总数</th>
										<th width="15%">办件总数</th>
									</tr>
								</thead>
							</table>

						</div>
						<div id="outer" style="overflow: hidden; height: 200px;">
							<div class="fwqk_roll">
								<table border="0" cellspacing="0" cellpadding="0" class="fwqk_table_tbody" id="fwqk_table_tbody">
									<tbody id="fwqk_tbody">
									</tbody>
								</table>
							</div>
						</div>

					</div>

					<!--各乡镇街道基层政务服务事项排名TOP5-->
					<div class="shiXiangPaiMing">
						<div class="titleBox">各乡镇街道基层政务服务事项排名TOP5</div>
						<div class="shiXiangPaiMing_charts" id="gxzjdjczwfwsxpmEchart">
							<!-- <p class="boxP">删除p标签，此div中放置表格，颜色：#d3a54d,#0debfb,#413eac,</p> -->
						</div>
					</div>
				</div>

				<div class="mid">
					<div class="midData">
						<div class="midDataItem1">
							<span id="jczwfwbjzl"></span>
							<font>基层政务服务办件总量</font>
						</div>
						<div class="midDataItem2">
							<span id="jnjcbjl"></span>
							<font>今年基层办件量</font>
						</div>
						<div class="midDataItem2 midDataItem3">
							<span id="byjcbjl"></span>
							<font>本月基层办件量</font>
						</div>
					</div>

					<!--办件排名-->
					<div class="banJian">
						<div class="titleBox">办件排名</div>
						<div class="cunJiBanJianList">
							<div class="cunJiBanJianItem">
								<div class="index"><img src="img/paiming1.png" alt="" /></div>
								<div class="site"><span id="bjpm0_name"></span></div>
								<div class="step">
									<em style="width: 59%;" id="bjpm0_em"><b></b></em>
								</div>
								<div class="text"><b id="bjpm0_num"></b>件</div>
							</div>
							<div class="cunJiBanJianItem">
								<div class="index"><img src="img/paiming2.png" alt="" /></div>
								<div class="site"><span id="bjpm1_name"></span></div>
								<div class="step">
									<em style="width: 74%;" id="bjpm1_em"><b></b></em>
								</div>
								<div class="text"><b id="bjpm1_num"></b>件</div>
							</div>
							<div class="cunJiBanJianItem">
								<div class="index"><img src="img/paiming3.png" alt="" /></div>
								<div class="site"><span id="bjpm2_name"></span></div>
								<div class="step">
									<em style="width: 74%;" id="bjpm2_em"><b></b></em>
								</div>
								<div class="text"><b id="bjpm2_num"></b>件</div>
							</div>
							<div class="cunJiBanJianItem">
								<div class="index"><img src="img/paiming4.png" alt="" /></div>
								<div class="site"><span id="bjpm3_name"></span></div>
								<div class="step">
									<em style="width: 74%;" id="bjpm3_em"><b></b></em>
								</div>
								<div class="text"><b id="bjpm3_num"></b>件</div>
							</div>
							<div class="cunJiBanJianItem">
								<div class="index"><img src="img/paiming5.png" alt="" /></div>
								<div class="site"><span id="bjpm4_name"></span></div>
								<div class="step">
									<em style="width: 74%;" id="bjpm4_em"><b></b></em>
								</div>
								<div class="text"><b id="bjpm4_num"></b>件</div>
							</div>
						</div>
					</div>
				</div>

				<div class="right">
					<!--基层政务服务办件排名-->
					<div class="banJianPaiMing">
						<div class="titleBox">基层政务服务办件排名</div>
						<div class="banJianPaiMing_charts" id="jczwfwbjpmEchart">
							<!-- <p class="boxP">删除p标签，此div中放置表格，颜色：#04f7e3</p> -->
						</div>
					</div>

					<!--热门事项TOP5-->
					<div class="reMenShiXiang">
						<div class="titleBox">热门事项TOP5</div>
						<div class="reMenShiXiangBox">
							<div class="reMenShiXiangItem">
								<div class="reMenShiXiangIndex">1</div>
								<span id="rmpm0_name" style="width:70%;margin:0 auto"></span>
								<font>受理量<b id="rmpm0_sll"></b></font>
								<font>办结数<b id="rmpm0_bjs"></b></font>
							</div>
							<div class="reMenShiXiangItem">
								<div class="reMenShiXiangIndex">2</div>
								<span id="rmpm1_name" style="width:70%;margin:0 auto"></span>
								<font>受理量<b id="rmpm1_sll"></b></font>
								<font>办结数<b id="rmpm1_bjs"></b></font>
							</div>
							<div class="reMenShiXiangItem">
								<div class="reMenShiXiangIndex">3</div>
								<span id="rmpm2_name" style="width:70%;margin:0 auto"></span>
								<font>受理量<b id="rmpm2_sll"></b></font>
								<font>办结数<b id="rmpm2_bjs"></b></font>
							</div>
							<div class="reMenShiXiangItem">
								<div class="reMenShiXiangIndex">4</div>
								<span id="rmpm3_name" style="width:70%;margin:0 auto"></span>
								<font>受理量<b id="rmpm3_sll"></b></font>
								<font>办结数<b id="rmpm3_bjs"></b></font>
							</div>
							<div class="reMenShiXiangItem">
								<div class="reMenShiXiangIndex">5</div>
								<span id="rmpm4_name" style="width:70%;margin:0 auto"></span>
								<font>受理量<b id="rmpm4_sll"></b></font>
								<font>办结数<b id="rmpm4_bjs"></b></font>
							</div>
						</div>
					</div>

					<!--发牌统计情况TOP5-->
					<div class="faPaiTongJi">
						<div class="titleBox">发牌统计情况TOP5</div>
						<table border="0" cellspacing="0" cellpadding="0">
							<tr>
								<th>排名</th>
								<th>区域</th>
								<th>红牌数</th>
								<th>黄牌数</th>
								<th>预警数</th>
							</tr>
							<tr>
								<td><img src="img/paiming1.png" /></td>
								<td id="fptj0_name"></td>
								<td id="fptj0_hongpai"></td>
								<td id="fptj0_huangpai"></td>
								<td id="fptj0_yujing"></td>
							</tr>
							<tr>
								<td><img src="img/paiming2.png" /></td>
								<td id="fptj1_name"></td>
								<td id="fptj1_hongpai"></td>
								<td id="fptj1_huangpai"></td>
								<td id="fptj1_yujing"></td>
							</tr>
							<tr>
								<td><img src="img/paiming3.png" /></td>
								<td id="fptj2_name"></td>
								<td id="fptj2_hongpai"></td>
								<td id="fptj2_huangpai"></td>
								<td id="fptj2_yujing"></td>
							</tr>
							<tr>
								<td><img src="img/paiming4.png" /></td>
								<td id="fptj3_name"></td>
								<td id="fptj3_hongpai"></td>
								<td id="fptj3_huangpai"></td>
								<td id="fptj3_yujing"></td>
							</tr>
							<tr>
								<td><img src="img/paiming5.png" /></td>
								<td id="fptj4_name"></td>
								<td id="fptj4_hongpai"></td>
								<td id="fptj4_huangpai"></td>
								<td id="fptj4_yujing"></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="js/yms.js"></script>

</html>
