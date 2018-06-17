//左侧导航

			$('.banner .nav1 .kind').mousemove(function() {
				$(this).css({'background-color':'#fff','color':'black'});
				$('.banner .nav1 .kind').not($(this)).css({'background-color': '#434343','color': 'white'});


				var ind = $(this).index('.banner .nav1 .kind');
				$('.nav1_more').eq(ind).show();
				$('.nav1_more').not($('.nav1_more').eq(ind)).hide();

			});
			$('.banner .nav1 .kind').mouseout(function() {
				var ind = $(this).index('.banner .nav1 .kind');
				$('.nav1_more').eq(ind).hide();
				$(this).css({'background-color':'#434343','color':'white'});
			});

			$('.nav1_more').mousemove(function() {
				$(this).show();
				var ind = $(this).index('.nav1_more');
				$('.kind').eq(ind).css({'background-color':'#fff','color':'black'});
			});
			$('.nav1_more').mouseout(function() {
				$(this).hide();
				var ind = $(this).index('.nav1_more');
				$('.kind').eq(ind).css({'background-color': '#434343','color': 'white'});
			});

//
			var num = 0;
			var timer;
			function change(){
				var ind = num%4;
				var margin_left =  (ind)*-900;
				var px = margin_left+"px";
				$('.ul_img').eq(0).animate({'margin-left':px},1500);
				num++;
			}
			show();
			function show(){
			timer = setInterval("change()",4000);
		}
		$('arrow_left').click(function() {
			/* Act on the event */
			$('.ul_img').eq(0).animate({'margin-left':px},1500);
			num++;
		});


//图片滑动

		$('.tuijian_img').hover(function() {
			$(this).animate({'margin-left':'0px'},200);
		}, function() {
			$(this).animate({'margin-left':'30px'},200);
		});
