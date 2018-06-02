	function innerHTMLTest1(){
			var randValNode = document.getElementById("rand-val");
            randValNode.innerHTML = 
            `<div>
            <span >Q. </span>
            <span>쿠폰이 등록되지 않아요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                <font color="pink">
                    <b>
                        안내1. 대소문자를 구분하여 쿠폰 코드를 다시 입력해 주세요.<br>
                        안내2. 이미 사용된 쿠폰 입니다. <br>
                    </b>
                </font>
                    A계정에 쿠폰이 등록되었는데 B계정에 동일한 쿠폰 등록 시 안내되는 문구입니다. 현재 로그인되어 있는 계정이 아닌 가입하신 다른 계정을 확인 해주세요.<br>
                    <font color="pink">
                        <b>안내3. 현재 사용하고 계신 이용권 플랜과 일치하지 않은 쿠폰입니다.<br></b>
                    </font>
                    이미 이용권 구독중인 상태에서는 쿠폰이 등록되지 않습니다. [앱 마이페이지 > 설정 > 계정설정 > 해지하기]에서 해지 신청 후 이용권 만료일이 지난 이후에 다시 쿠폰 등록 해주세요.<br>

                    위 내용과 별개로 쿠폰이 등록되지 않는다면 무비하이 고객센터로
                    <b>'쿠폰 번호'</b>
                    와
                    <b>'무비하이 가입 이메일 계정'</b>
                    을 알려주세요.<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>
            <span>Q. </span>
            <span>해지는 어떻게 하나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                * 해지 후에도 현재 이용 중인 이용권의 만료일까지 감상 가능하며, 다음 결제일부터 자동결제 되지 않습니다.<br>
                    * 결제일 당일에 해지하신 경우 다음 결제 예정일에 반영될 수 있습니다.<br>
                    * 애플 iTunes / 구글 결제의 경우 웹이 아닌 앱에서 해지를 진행해주세요.<br>
                    <font color="pink"><b>[카드 결제/쿠폰 등록/휴대폰 소액 결제]</b></font><br>
                    <b>앱에서 해지</b><br>
                    1. 마이페이지<br>
                    2. 설정   <br>
                    3. 계정 설정<br>
                    4. 하단의 ‘해지하기’ 선택<br>
                    <b>웹에서 해지</b><br>
                    1. 무비하이 사이트(play.watcha.net)<br>
                    2. 우측 상단의 프로필 아이콘 선택<br>
                    3. 설정<br>
                    4. ‘해지하기’ 선택<br>
                    <font color="pink"><b>[해지 취소하기]</b></font><br>
                    앱에서 해지 취소: 마이페이지 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
                    웹에서 해지 취소: 무비하이 사이트(play.watcha.net) > 우측 상단의 프로필 아이콘 선택 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>  
            <span>Q. </span>
            <span>무비하이의 예상별점과 추천의 원리는 무엇인가요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                    무비하이는 무하에서 쌓은 데이터를 활용해 영화와 드라마를 추천해 드려요!<br><br>
                    1. 먼저, 내가 매긴 별점을 통해 취향이 비슷한 사람을 찾습니다. 누구나 영화나 드라마를 볼 때 자기만의 중요한 기준이 있습니다. 예를 들면, "난 영상미나 음악이 중요해… 아니야 스토리가 갑이지… 에이 영화는 연기 보는 맛이야…" 같은 것이죠. 결국 나도 모르게 이 기준에 따라 별점을 주게 되고, 따라서 내가 매긴 별점들을 쭈욱 분석하면 내가 중요하게 생각하는 기준, 나만의 성향을 분석할 수가 있습니다. 그리고 이렇게 분석한 성향을 서로 서로 비교하면, 아주 비슷한 성향을 가진 사람들을 찾을 수 있겠죠. 이 사람들이 바로 나와 취향이 비슷한 사람들입니다.<br><br> 

                    2. 이렇게 내 취향과 비슷한 사람들이 매긴 평가를 모아서 작품 별로 "내 예상별점"을 만듭니다. 나와 취향이 비슷한 사람들이 개별 작품에 매긴 점수는, 아마도 내가 실제로 매길 점수와 아주 아주 유사할겁니다. 즉 보지 않았더라도 이 사람들이 매긴 점수를 보면, 내가 이 작품에 몇 점을 줄지 미리 알 수가 있는 것이죠. 무하는 나와 취향이 비슷한 사람들의 평가를 종합해서, 자동으로 작품 별 "내 예상별점"을 계산하고 즉시 보여줍니다.<br><br> 

                    3. "내 예상별점"이 높은 작품들을 추천합니다 이렇게 계산된 예상별점이 "3점 후반대 ~ 5점"에 가까운 영화들은 내가 재미있게 즐길 확률이 높습니다. 따라서 이런 작품들을 나에게 추천하되, 만약 내가 좋아하는 감독이나 장르에 해당한다면 가산점을 줘서 더 먼저 추천합니다.<br><br> 

                    어때요? 참 쉽죠! 물론 이건 말로 간단히 풀어 설명한 것이고, 실제 위의 1~3번 과정을 "엄청난 양의 데이터에 대해 실시간으로 오류 없이 정확하게 계산하는 것"은 정말 정말 어려운 일입니다. <br><br>

                    무하는 수 년에 걸쳐 자체 개발한 추천 엔진 '핀셋'을 통해 이 모든 과정을 아주 안정적으로 제공하고 있고 별점과 사용자가 쌓일 때마다 "기계학습" 이라는 과정으로 계속 개선되고 있어요. 이제 뭐볼지 고민하지 마세요!<br>
            </a></div>
          </div>
        <br><br><hr>
        <div>
            <span >Q. </span>
            <span>TV지원 이용권으로 볼 수 있는 기기가 궁금해요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                <font color="pink">
                    <b>
                        안내1. 대소문자를 구분하여 쿠폰 코드를 다시 입력해 주세요.<br>
                        안내2. 이미 사용된 쿠폰 입니다. <br>
                    </b>
                </font>
                    A계정에 쿠폰이 등록되었는데 B계정에 동일한 쿠폰 등록 시 안내되는 문구입니다. 현재 로그인되어 있는 계정이 아닌 가입하신 다른 계정을 확인 해주세요.<br>
                    <font color="pink">
                        <b>안내3. 현재 사용하고 계신 이용권 플랜과 일치하지 않은 쿠폰입니다.<br></b>
                    </font>
                    이미 이용권 구독중인 상태에서는 쿠폰이 등록되지 않습니다. [앱 마이페이지 > 설정 > 계정설정 > 해지하기]에서 해지 신청 후 이용권 만료일이 지난 이후에 다시 쿠폰 등록 해주세요.<br>

                    위 내용과 별개로 쿠폰이 등록되지 않는다면 무비하이 고객센터로
                    <b>'쿠폰 번호'</b>
                    와
                    <b>'무비하이 가입 이메일 계정'</b>
                    을 알려주세요.<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>
            <span>Q. </span>
            <span>화질이 별로예요. 좋은 화질로 볼 수 없나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                * 해지 후에도 현재 이용 중인 이용권의 만료일까지 감상 가능하며, 다음 결제일부터 자동결제 되지 않습니다.<br>
                    * 결제일 당일에 해지하신 경우 다음 결제 예정일에 반영될 수 있습니다.<br>
                    * 애플 iTunes / 구글 결제의 경우 웹이 아닌 앱에서 해지를 진행해주세요.<br>
                    <font color="pink"><b>[카드 결제/쿠폰 등록/휴대폰 소액 결제]</b></font><br>
                    <b>앱에서 해지</b><br>
                    1. 마이페이지<br>
                    2. 설정   <br>
                    3. 계정 설정<br>
                    4. 하단의 ‘해지하기’ 선택<br>
                    <b>웹에서 해지</b><br>
                    1. 무비하이 사이트(play.watcha.net)<br>
                    2. 우측 상단의 프로필 아이콘 선택<br>
                    3. 설정<br>
                    4. ‘해지하기’ 선택<br>
                    <font color="pink"><b>[해지 취소하기]</b></font><br>
                    앱에서 해지 취소: 마이페이지 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
                    웹에서 해지 취소: 무비하이 사이트(play.watcha.net) > 우측 상단의 프로필 아이콘 선택 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>  
            <span>Q. </span>
            <span>모바일에서 화질 조정을 할 수 있나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                    무비하이는 무하에서 쌓은 데이터를 활용해 영화와 드라마를 추천해 드려요!<br><br>
                    1. 먼저, 내가 매긴 별점을 통해 취향이 비슷한 사람을 찾습니다. 누구나 영화나 드라마를 볼 때 자기만의 중요한 기준이 있습니다. 예를 들면, "난 영상미나 음악이 중요해… 아니야 스토리가 갑이지… 에이 영화는 연기 보는 맛이야…" 같은 것이죠. 결국 나도 모르게 이 기준에 따라 별점을 주게 되고, 따라서 내가 매긴 별점들을 쭈욱 분석하면 내가 중요하게 생각하는 기준, 나만의 성향을 분석할 수가 있습니다. 그리고 이렇게 분석한 성향을 서로 서로 비교하면, 아주 비슷한 성향을 가진 사람들을 찾을 수 있겠죠. 이 사람들이 바로 나와 취향이 비슷한 사람들입니다.<br><br> 

                    2. 이렇게 내 취향과 비슷한 사람들이 매긴 평가를 모아서 작품 별로 "내 예상별점"을 만듭니다. 나와 취향이 비슷한 사람들이 개별 작품에 매긴 점수는, 아마도 내가 실제로 매길 점수와 아주 아주 유사할겁니다. 즉 보지 않았더라도 이 사람들이 매긴 점수를 보면, 내가 이 작품에 몇 점을 줄지 미리 알 수가 있는 것이죠. 무하는 나와 취향이 비슷한 사람들의 평가를 종합해서, 자동으로 작품 별 "내 예상별점"을 계산하고 즉시 보여줍니다.<br><br> 

                    3. "내 예상별점"이 높은 작품들을 추천합니다 이렇게 계산된 예상별점이 "3점 후반대 ~ 5점"에 가까운 영화들은 내가 재미있게 즐길 확률이 높습니다. 따라서 이런 작품들을 나에게 추천하되, 만약 내가 좋아하는 감독이나 장르에 해당한다면 가산점을 줘서 더 먼저 추천합니다.<br><br> 

                    어때요? 참 쉽죠! 물론 이건 말로 간단히 풀어 설명한 것이고, 실제 위의 1~3번 과정을 "엄청난 양의 데이터에 대해 실시간으로 오류 없이 정확하게 계산하는 것"은 정말 정말 어려운 일입니다. <br><br>

                    무하는 수 년에 걸쳐 자체 개발한 추천 엔진 '핀셋'을 통해 이 모든 과정을 아주 안정적으로 제공하고 있고 별점과 사용자가 쌓일 때마다 "기계학습" 이라는 과정으로 계속 개선되고 있어요. 이제 뭐볼지 고민하지 마세요!<br>
            </a></div>
          </div> `;
           
		}

        function innerHTMLTest2(){
			var randValNode = document.getElementById("rand-val");
            randValNode.innerHTML = 
            `<div>
            <span >Q. </span>
            <span>첫 달 무료인데 결제가 되었어요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                <font color="pink">
                    <b>
                        안내1. 대소문자를 구분하여 쿠폰 코드를 다시 입력해 주세요.<br>
                        안내2. 이미 사용된 쿠폰 입니다. <br>
                    </b>
                </font>
                    A계정에 쿠폰이 등록되었는데 B계정에 동일한 쿠폰 등록 시 안내되는 문구입니다. 현재 로그인되어 있는 계정이 아닌 가입하신 다른 계정을 확인 해주세요.<br>
                    <font color="pink">
                        <b>안내3. 현재 사용하고 계신 이용권 플랜과 일치하지 않은 쿠폰입니다.<br></b>
                    </font>
                    이미 이용권 구독중인 상태에서는 쿠폰이 등록되지 않습니다. [앱 마이페이지 > 설정 > 계정설정 > 해지하기]에서 해지 신청 후 이용권 만료일이 지난 이후에 다시 쿠폰 등록 해주세요.<br>

                    위 내용과 별개로 쿠폰이 등록되지 않는다면 무비하이 고객센터로
                    <b>'쿠폰 번호'</b>
                    와
                    <b>'무비하이 가입 이메일 계정'</b>
                    을 알려주세요.<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>
            <span>Q. </span>
            <span>결제 승인한 적이 없는데 결제되었어요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                * 해지 후에도 현재 이용 중인 이용권의 만료일까지 감상 가능하며, 다음 결제일부터 자동결제 되지 않습니다.<br>
                    * 결제일 당일에 해지하신 경우 다음 결제 예정일에 반영될 수 있습니다.<br>
                    * 애플 iTunes / 구글 결제의 경우 웹이 아닌 앱에서 해지를 진행해주세요.<br>
                    <font color="pink"><b>[카드 결제/쿠폰 등록/휴대폰 소액 결제]</b></font><br>
                    <b>앱에서 해지</b><br>
                    1. 마이페이지<br>
                    2. 설정   <br>
                    3. 계정 설정<br>
                    4. 하단의 ‘해지하기’ 선택<br>
                    <b>웹에서 해지</b><br>
                    1. 무비하이 사이트(play.watcha.net)<br>
                    2. 우측 상단의 프로필 아이콘 선택<br>
                    3. 설정<br>
                    4. ‘해지하기’ 선택<br>
                    <font color="pink"><b>[해지 취소하기]</b></font><br>
                    앱에서 해지 취소: 마이페이지 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
                    웹에서 해지 취소: 무비하이 사이트(play.watcha.net) > 우측 상단의 프로필 아이콘 선택 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>  
            <span>Q. </span>
            <span>결제수단을 변경하고 싶어요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                    무비하이는 무하에서 쌓은 데이터를 활용해 영화와 드라마를 추천해 드려요!<br><br>
                    1. 먼저, 내가 매긴 별점을 통해 취향이 비슷한 사람을 찾습니다. 누구나 영화나 드라마를 볼 때 자기만의 중요한 기준이 있습니다. 예를 들면, "난 영상미나 음악이 중요해… 아니야 스토리가 갑이지… 에이 영화는 연기 보는 맛이야…" 같은 것이죠. 결국 나도 모르게 이 기준에 따라 별점을 주게 되고, 따라서 내가 매긴 별점들을 쭈욱 분석하면 내가 중요하게 생각하는 기준, 나만의 성향을 분석할 수가 있습니다. 그리고 이렇게 분석한 성향을 서로 서로 비교하면, 아주 비슷한 성향을 가진 사람들을 찾을 수 있겠죠. 이 사람들이 바로 나와 취향이 비슷한 사람들입니다.<br><br> 

                    2. 이렇게 내 취향과 비슷한 사람들이 매긴 평가를 모아서 작품 별로 "내 예상별점"을 만듭니다. 나와 취향이 비슷한 사람들이 개별 작품에 매긴 점수는, 아마도 내가 실제로 매길 점수와 아주 아주 유사할겁니다. 즉 보지 않았더라도 이 사람들이 매긴 점수를 보면, 내가 이 작품에 몇 점을 줄지 미리 알 수가 있는 것이죠. 무하는 나와 취향이 비슷한 사람들의 평가를 종합해서, 자동으로 작품 별 "내 예상별점"을 계산하고 즉시 보여줍니다.<br><br> 

                    3. "내 예상별점"이 높은 작품들을 추천합니다 이렇게 계산된 예상별점이 "3점 후반대 ~ 5점"에 가까운 영화들은 내가 재미있게 즐길 확률이 높습니다. 따라서 이런 작품들을 나에게 추천하되, 만약 내가 좋아하는 감독이나 장르에 해당한다면 가산점을 줘서 더 먼저 추천합니다.<br><br> 

                    어때요? 참 쉽죠! 물론 이건 말로 간단히 풀어 설명한 것이고, 실제 위의 1~3번 과정을 "엄청난 양의 데이터에 대해 실시간으로 오류 없이 정확하게 계산하는 것"은 정말 정말 어려운 일입니다. <br><br>

                    무하는 수 년에 걸쳐 자체 개발한 추천 엔진 '핀셋'을 통해 이 모든 과정을 아주 안정적으로 제공하고 있고 별점과 사용자가 쌓일 때마다 "기계학습" 이라는 과정으로 계속 개선되고 있어요. 이제 뭐볼지 고민하지 마세요!<br>
            </a></div>
          </div>
        <br><br><hr>
        <div>
            <span >Q. </span>
            <span>결제가 되지 않아요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                <font color="pink">
                    <b>
                        안내1. 대소문자를 구분하여 쿠폰 코드를 다시 입력해 주세요.<br>
                        안내2. 이미 사용된 쿠폰 입니다. <br>
                    </b>
                </font>
                    A계정에 쿠폰이 등록되었는데 B계정에 동일한 쿠폰 등록 시 안내되는 문구입니다. 현재 로그인되어 있는 계정이 아닌 가입하신 다른 계정을 확인 해주세요.<br>
                    <font color="pink">
                        <b>안내3. 현재 사용하고 계신 이용권 플랜과 일치하지 않은 쿠폰입니다.<br></b>
                    </font>
                    이미 이용권 구독중인 상태에서는 쿠폰이 등록되지 않습니다. [앱 마이페이지 > 설정 > 계정설정 > 해지하기]에서 해지 신청 후 이용권 만료일이 지난 이후에 다시 쿠폰 등록 해주세요.<br>

                    위 내용과 별개로 쿠폰이 등록되지 않는다면 무비하이 고객센터로
                    <b>'쿠폰 번호'</b>
                    와
                    <b>'무비하이 가입 이메일 계정'</b>
                    을 알려주세요.<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>
            <span>Q. </span>
            <span>법인 카드/알뜰폰/기피트 카드로 결제 가능한가요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                * 해지 후에도 현재 이용 중인 이용권의 만료일까지 감상 가능하며, 다음 결제일부터 자동결제 되지 않습니다.<br>
                    * 결제일 당일에 해지하신 경우 다음 결제 예정일에 반영될 수 있습니다.<br>
                    * 애플 iTunes / 구글 결제의 경우 웹이 아닌 앱에서 해지를 진행해주세요.<br>
                    <font color="pink"><b>[카드 결제/쿠폰 등록/휴대폰 소액 결제]</b></font><br>
                    <b>앱에서 해지</b><br>
                    1. 마이페이지<br>
                    2. 설정   <br>
                    3. 계정 설정<br>
                    4. 하단의 ‘해지하기’ 선택<br>
                    <b>웹에서 해지</b><br>
                    1. 무비하이 사이트(play.watcha.net)<br>
                    2. 우측 상단의 프로필 아이콘 선택<br>
                    3. 설정<br>
                    4. ‘해지하기’ 선택<br>
                    <font color="pink"><b>[해지 취소하기]</b></font><br>
                    앱에서 해지 취소: 마이페이지 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
                    웹에서 해지 취소: 무비하이 사이트(play.watcha.net) > 우측 상단의 프로필 아이콘 선택 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>  
            <span>Q. </span>
            <span>정기 결제 말고 한달만 결제할 수 없나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                    무비하이는 무하에서 쌓은 데이터를 활용해 영화와 드라마를 추천해 드려요!<br><br>
                    1. 먼저, 내가 매긴 별점을 통해 취향이 비슷한 사람을 찾습니다. 누구나 영화나 드라마를 볼 때 자기만의 중요한 기준이 있습니다. 예를 들면, "난 영상미나 음악이 중요해… 아니야 스토리가 갑이지… 에이 영화는 연기 보는 맛이야…" 같은 것이죠. 결국 나도 모르게 이 기준에 따라 별점을 주게 되고, 따라서 내가 매긴 별점들을 쭈욱 분석하면 내가 중요하게 생각하는 기준, 나만의 성향을 분석할 수가 있습니다. 그리고 이렇게 분석한 성향을 서로 서로 비교하면, 아주 비슷한 성향을 가진 사람들을 찾을 수 있겠죠. 이 사람들이 바로 나와 취향이 비슷한 사람들입니다.<br><br> 

                    2. 이렇게 내 취향과 비슷한 사람들이 매긴 평가를 모아서 작품 별로 "내 예상별점"을 만듭니다. 나와 취향이 비슷한 사람들이 개별 작품에 매긴 점수는, 아마도 내가 실제로 매길 점수와 아주 아주 유사할겁니다. 즉 보지 않았더라도 이 사람들이 매긴 점수를 보면, 내가 이 작품에 몇 점을 줄지 미리 알 수가 있는 것이죠. 무하는 나와 취향이 비슷한 사람들의 평가를 종합해서, 자동으로 작품 별 "내 예상별점"을 계산하고 즉시 보여줍니다.<br><br> 

                    3. "내 예상별점"이 높은 작품들을 추천합니다 이렇게 계산된 예상별점이 "3점 후반대 ~ 5점"에 가까운 영화들은 내가 재미있게 즐길 확률이 높습니다. 따라서 이런 작품들을 나에게 추천하되, 만약 내가 좋아하는 감독이나 장르에 해당한다면 가산점을 줘서 더 먼저 추천합니다.<br><br> 

                    어때요? 참 쉽죠! 물론 이건 말로 간단히 풀어 설명한 것이고, 실제 위의 1~3번 과정을 "엄청난 양의 데이터에 대해 실시간으로 오류 없이 정확하게 계산하는 것"은 정말 정말 어려운 일입니다. <br><br>

                    무하는 수 년에 걸쳐 자체 개발한 추천 엔진 '핀셋'을 통해 이 모든 과정을 아주 안정적으로 제공하고 있고 별점과 사용자가 쌓일 때마다 "기계학습" 이라는 과정으로 계속 개선되고 있어요. 이제 뭐볼지 고민하지 마세요!<br>
            </a></div>
          </div> `;
		}

        function innerHTMLTest3(){
			var randValNode = document.getElementById("rand-val");
            randValNode.innerHTML = 
            `<div>
            <span >Q. </span>
            <span>이용권이 없다고 나와요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                <font color="pink">
                    <b>
                        안내1. 대소문자를 구분하여 쿠폰 코드를 다시 입력해 주세요.<br>
                        안내2. 이미 사용된 쿠폰 입니다. <br>
                    </b>
                </font>
                    A계정에 쿠폰이 등록되었는데 B계정에 동일한 쿠폰 등록 시 안내되는 문구입니다. 현재 로그인되어 있는 계정이 아닌 가입하신 다른 계정을 확인 해주세요.<br>
                    <font color="pink">
                        <b>안내3. 현재 사용하고 계신 이용권 플랜과 일치하지 않은 쿠폰입니다.<br></b>
                    </font>
                    이미 이용권 구독중인 상태에서는 쿠폰이 등록되지 않습니다. [앱 마이페이지 > 설정 > 계정설정 > 해지하기]에서 해지 신청 후 이용권 만료일이 지난 이후에 다시 쿠폰 등록 해주세요.<br>

                    위 내용과 별개로 쿠폰이 등록되지 않는다면 무비하이 고객센터로
                    <b>'쿠폰 번호'</b>
                    와
                    <b>'무비하이 가입 이메일 계정'</b>
                    을 알려주세요.<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>
            <span>Q. </span>
            <span>결제취소(환불) 하고 싶어요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                * 해지 후에도 현재 이용 중인 이용권의 만료일까지 감상 가능하며, 다음 결제일부터 자동결제 되지 않습니다.<br>
                    * 결제일 당일에 해지하신 경우 다음 결제 예정일에 반영될 수 있습니다.<br>
                    * 애플 iTunes / 구글 결제의 경우 웹이 아닌 앱에서 해지를 진행해주세요.<br>
                    <font color="pink"><b>[카드 결제/쿠폰 등록/휴대폰 소액 결제]</b></font><br>
                    <b>앱에서 해지</b><br>
                    1. 마이페이지<br>
                    2. 설정   <br>
                    3. 계정 설정<br>
                    4. 하단의 ‘해지하기’ 선택<br>
                    <b>웹에서 해지</b><br>
                    1. 무비하이 사이트(play.watcha.net)<br>
                    2. 우측 상단의 프로필 아이콘 선택<br>
                    3. 설정<br>
                    4. ‘해지하기’ 선택<br>
                    <font color="pink"><b>[해지 취소하기]</b></font><br>
                    앱에서 해지 취소: 마이페이지 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
                    웹에서 해지 취소: 무비하이 사이트(play.watcha.net) > 우측 상단의 프로필 아이콘 선택 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>  
            <span>Q. </span>
            <span>앱을 삭제하면 결제가 되지 않나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                    무비하이는 무하에서 쌓은 데이터를 활용해 영화와 드라마를 추천해 드려요!<br><br>
                    1. 먼저, 내가 매긴 별점을 통해 취향이 비슷한 사람을 찾습니다. 누구나 영화나 드라마를 볼 때 자기만의 중요한 기준이 있습니다. 예를 들면, "난 영상미나 음악이 중요해… 아니야 스토리가 갑이지… 에이 영화는 연기 보는 맛이야…" 같은 것이죠. 결국 나도 모르게 이 기준에 따라 별점을 주게 되고, 따라서 내가 매긴 별점들을 쭈욱 분석하면 내가 중요하게 생각하는 기준, 나만의 성향을 분석할 수가 있습니다. 그리고 이렇게 분석한 성향을 서로 서로 비교하면, 아주 비슷한 성향을 가진 사람들을 찾을 수 있겠죠. 이 사람들이 바로 나와 취향이 비슷한 사람들입니다.<br><br> 

                    2. 이렇게 내 취향과 비슷한 사람들이 매긴 평가를 모아서 작품 별로 "내 예상별점"을 만듭니다. 나와 취향이 비슷한 사람들이 개별 작품에 매긴 점수는, 아마도 내가 실제로 매길 점수와 아주 아주 유사할겁니다. 즉 보지 않았더라도 이 사람들이 매긴 점수를 보면, 내가 이 작품에 몇 점을 줄지 미리 알 수가 있는 것이죠. 무하는 나와 취향이 비슷한 사람들의 평가를 종합해서, 자동으로 작품 별 "내 예상별점"을 계산하고 즉시 보여줍니다.<br><br> 

                    3. "내 예상별점"이 높은 작품들을 추천합니다 이렇게 계산된 예상별점이 "3점 후반대 ~ 5점"에 가까운 영화들은 내가 재미있게 즐길 확률이 높습니다. 따라서 이런 작품들을 나에게 추천하되, 만약 내가 좋아하는 감독이나 장르에 해당한다면 가산점을 줘서 더 먼저 추천합니다.<br><br> 

                    어때요? 참 쉽죠! 물론 이건 말로 간단히 풀어 설명한 것이고, 실제 위의 1~3번 과정을 "엄청난 양의 데이터에 대해 실시간으로 오류 없이 정확하게 계산하는 것"은 정말 정말 어려운 일입니다. <br><br>

                    무하는 수 년에 걸쳐 자체 개발한 추천 엔진 '핀셋'을 통해 이 모든 과정을 아주 안정적으로 제공하고 있고 별점과 사용자가 쌓일 때마다 "기계학습" 이라는 과정으로 계속 개선되고 있어요. 이제 뭐볼지 고민하지 마세요!<br>
            </a></div>
          </div>
        <br><br><hr>
        <div>
            <span >Q. </span>
            <span>가입한 이메일 주소와 비밀번호를 변경하고 싶어요. </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                <font color="pink">
                    <b>
                        안내1. 대소문자를 구분하여 쿠폰 코드를 다시 입력해 주세요.<br>
                        안내2. 이미 사용된 쿠폰 입니다. <br>
                    </b>
                </font>
                    A계정에 쿠폰이 등록되었는데 B계정에 동일한 쿠폰 등록 시 안내되는 문구입니다. 현재 로그인되어 있는 계정이 아닌 가입하신 다른 계정을 확인 해주세요.<br>
                    <font color="pink">
                        <b>안내3. 현재 사용하고 계신 이용권 플랜과 일치하지 않은 쿠폰입니다.<br></b>
                    </font>
                    이미 이용권 구독중인 상태에서는 쿠폰이 등록되지 않습니다. [앱 마이페이지 > 설정 > 계정설정 > 해지하기]에서 해지 신청 후 이용권 만료일이 지난 이후에 다시 쿠폰 등록 해주세요.<br>

                    위 내용과 별개로 쿠폰이 등록되지 않는다면 무비하이 고객센터로
                    <b>'쿠폰 번호'</b>
                    와
                    <b>'무비하이 가입 이메일 계정'</b>
                    을 알려주세요.<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>
            <span>Q. </span>
            <span>휴대폰/아이핀 말고 본인(성인)인증 할 수 있는 방법은 없나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                * 해지 후에도 현재 이용 중인 이용권의 만료일까지 감상 가능하며, 다음 결제일부터 자동결제 되지 않습니다.<br>
                    * 결제일 당일에 해지하신 경우 다음 결제 예정일에 반영될 수 있습니다.<br>
                    * 애플 iTunes / 구글 결제의 경우 웹이 아닌 앱에서 해지를 진행해주세요.<br>
                    <font color="pink"><b>[카드 결제/쿠폰 등록/휴대폰 소액 결제]</b></font><br>
                    <b>앱에서 해지</b><br>
                    1. 마이페이지<br>
                    2. 설정   <br>
                    3. 계정 설정<br>
                    4. 하단의 ‘해지하기’ 선택<br>
                    <b>웹에서 해지</b><br>
                    1. 무비하이 사이트(play.watcha.net)<br>
                    2. 우측 상단의 프로필 아이콘 선택<br>
                    3. 설정<br>
                    4. ‘해지하기’ 선택<br>
                    <font color="pink"><b>[해지 취소하기]</b></font><br>
                    앱에서 해지 취소: 마이페이지 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
                    웹에서 해지 취소: 무비하이 사이트(play.watcha.net) > 우측 상단의 프로필 아이콘 선택 > 설정 > 이용권 상태의 '해지 취소' 선택<br>
            </a></div>
            </div>
        <br><br><hr>
        <div>  
            <span>Q. </span>
            <span>탈퇴한 이메일 계정을 다시 복구할 수 있나요? </span>
            <a onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';" href="javascript:void(0)"> 
                    <span style="float:right"><img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png"  onmouseover="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-128.png'"  onmouseout="this.src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png'" width="50px"/></span>
            <div style="DISPLAY: none">
                <br><br><hr>
                    무비하이는 무하에서 쌓은 데이터를 활용해 영화와 드라마를 추천해 드려요!<br><br>
                    1. 먼저, 내가 매긴 별점을 통해 취향이 비슷한 사람을 찾습니다. 누구나 영화나 드라마를 볼 때 자기만의 중요한 기준이 있습니다. 예를 들면, "난 영상미나 음악이 중요해… 아니야 스토리가 갑이지… 에이 영화는 연기 보는 맛이야…" 같은 것이죠. 결국 나도 모르게 이 기준에 따라 별점을 주게 되고, 따라서 내가 매긴 별점들을 쭈욱 분석하면 내가 중요하게 생각하는 기준, 나만의 성향을 분석할 수가 있습니다. 그리고 이렇게 분석한 성향을 서로 서로 비교하면, 아주 비슷한 성향을 가진 사람들을 찾을 수 있겠죠. 이 사람들이 바로 나와 취향이 비슷한 사람들입니다.<br><br> 

                    2. 이렇게 내 취향과 비슷한 사람들이 매긴 평가를 모아서 작품 별로 "내 예상별점"을 만듭니다. 나와 취향이 비슷한 사람들이 개별 작품에 매긴 점수는, 아마도 내가 실제로 매길 점수와 아주 아주 유사할겁니다. 즉 보지 않았더라도 이 사람들이 매긴 점수를 보면, 내가 이 작품에 몇 점을 줄지 미리 알 수가 있는 것이죠. 무하는 나와 취향이 비슷한 사람들의 평가를 종합해서, 자동으로 작품 별 "내 예상별점"을 계산하고 즉시 보여줍니다.<br><br> 

                    3. "내 예상별점"이 높은 작품들을 추천합니다 이렇게 계산된 예상별점이 "3점 후반대 ~ 5점"에 가까운 영화들은 내가 재미있게 즐길 확률이 높습니다. 따라서 이런 작품들을 나에게 추천하되, 만약 내가 좋아하는 감독이나 장르에 해당한다면 가산점을 줘서 더 먼저 추천합니다.<br><br> 

                    어때요? 참 쉽죠! 물론 이건 말로 간단히 풀어 설명한 것이고, 실제 위의 1~3번 과정을 "엄청난 양의 데이터에 대해 실시간으로 오류 없이 정확하게 계산하는 것"은 정말 정말 어려운 일입니다. <br><br>

                    무하는 수 년에 걸쳐 자체 개발한 추천 엔진 '핀셋'을 통해 이 모든 과정을 아주 안정적으로 제공하고 있고 별점과 사용자가 쌓일 때마다 "기계학습" 이라는 과정으로 계속 개선되고 있어요. 이제 뭐볼지 고민하지 마세요!<br>
            </a></div>
          </div> `;
		}
