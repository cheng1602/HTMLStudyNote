<%@page contentType="text/html; charset=UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>证照接口管理</title>
	<link rel="stylesheet" href="../resources/ace/assets/css/bootstrap.min.css" />
	<link rel="stylesheet" href="../resources/ace/assets/css/font-awesome.min.css" />
	<link rel="stylesheet" href="../resources/ace/assets/css/ui.jqgrid.css" />
	<link rel="stylesheet" href="../resources/ace/assets/css/ace.min.css" />
	<!-- 自定义 styles -->
	<link type="text/css" rel="stylesheet" href="../resources/ace/assets/css/sousuo-css.css" />
	<link rel="stylesheet" href="../resources/custom/css/main.css" />
	<style type="text/css">
	</style>
	<!-- basic scripts -->
	<!--[if IE]>
					<script src="../resources/ace/assets/js/jquery-1.10.2.min.js"></script>
					<![endif]-->
	<!--[if !IE]> -->
	<script src="../resources/ace/assets/js/jquery-2.0.3.min.js"></script>
	<!-- <![endif]-->
	<script src="../resources/ace/assets/js/bootstrap.min.js"></script>
	<script src="../resources/ace/assets/js/ace.min.js"></script>
	<script src="../resources/ace/assets/js/jqGrid/jquery.jqGrid.min.js"></script>
	<script src="../resources/ace/assets/js/jqGrid/i18n/grid.locale-cn.js"></script>
	<script src="../resources/ace/assets/js/date-time/bootstrap-datepicker.min.js"></script>
	<script src="../resources/ace/assets/js/date-time/bootstrap-datepicker.zh-CN.js"></script>
	<script src="../resources/custom/js/common.js"></script>
	<script src="../resources/custom/js/model.js"></script>
	<script type="text/javascript">
		$(function() {
			//接口信息
			var zzjkList = [{
					"jk_name": "出证套打接口"
				},
				{
					"jk_name": "电子证照目录接口"
				},
				{
					"jk_name": "基于证照标识下载服务"
				},
				{
					"jk_name": "电子证照检索服务"
				},
				{
					"jk_name": "电子证照验证服务"
				},
				{
					"jk_name": "基于持证主体代码下载服务"
				},
				{
					"jk_name": "基于持证主体代码信息获取服务"
				},
				{
					"jk_name": "基于证照标识信息获取服务"
				},
				{
					"jk_name": "基于证照标识预览服务"
				}

			];
			var grid_data = zzjkList;

			//接口名称的模糊查询
			function search() {
				$("#jqGridTable").jqGrid('clearGridData');
				grid_data = [];
				if ($("#zzjkName")[0].value.trim() == '') {
					grid_data = zzjkList;
				} else {
					for (i = 0; i < zzjkList.length; i++) {
						if (zzjkList[i].jk_name.indexOf($("#zzjkName")[0].value.trim()) >= 0) {
							grid_data.push(zzjkList[i]);
						}
					}
				}
				$("#jqGridTable").jqGrid('setGridParam', { // 重新加载数据
					datatype: 'local',
					data: grid_data,
					page: 1
				}).trigger("reloadGrid");
			}

			function jqgTable() {
				var jqgridheight = "";
				//如果parent.top.jqgridheight不存在，那么就使用默认值300
				try{
					jqgridheight = parent.top.jqgridheight-330-14;
				}catch(e){
					jqgridheight = 300;
				}
				$("#jqGridTable").jqGrid({
					datatype: "local", //数据来源,本地数据
					data: grid_data, //当datatype为"local"时需填写
					height: jqgridheight,
					colNames: ["接口名称", "操作"],
					colModel: [{
							name: 'jk_name',
							index: 'jk_name',
							align: 'center'
						},
						{
							name: '',
							index: '',
							align: 'center',
							formatter: optFmatter,
							width:30
						}
					],
					viewrecords: true, //显示总记录数
					rowNum: 10, //每页显示记录数
					altRows: true, //分页选项,可以下拉选择每页显示记录数
					rowList: [10, 20, 30], //用于改变每页显示行数的下拉列表框的元素数据
					autowidth: true, //自动匹配宽度
					pager: "pager", //表格数据关联的分页条,HTML元素
					rownumbers: false, //添加左侧行号
					sortable: true, //可以排序
					sortname: 'jk_name' //排序字段名
				});

				function optFmatter(cellvalue, options, rowObject) {
					var new_format_value = '<a href="word/' + rowObject.jk_name + '.docx" download="' + rowObject.jk_name +
						'.docx">下载</a>';
					//console.log(new_format_value);
					return new_format_value;
				}
			};

			$("#searchBtn").click(function() {
				search();
			})

			$("#resetBtn").click(function() {
				$("#zzjkName")[0].value = '';
				search();

			})
			jqgTable();
		})
	</script>
</head>
<body>
	<div class="main-container">
		<div class="widget-box">
			<div class="widget-header">
				<h4>证照接口信息下载</h4>
			</div>
			<br />
			&nbsp;&nbsp;接口名称：<input type="text" id="zzjkName" />
			<button type="button" class="btn btn-primary btn-sm" id="searchBtn">
				搜索 <i class="icon-search icon-on-right bigger-110"></i>
			</button>
			<button type="button" class="btn btn-primary btn-sm" id="resetBtn">
				重置<i class="icon-undo icon-on-right bigger-80"></i>
			</button>
		</div>
		<table id="jqGridTable"></table>
		<div id="pager"></div>

	</div>

</body>
</html>
