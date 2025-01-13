document.write("원시타입의 특징" + "<br>");
        document.write("1.문자열은 0번째 부터 시작한다." + "<br>");
        let coffee = "ice americano";
        document.write("4번째글자:a " + coffee[4] + "<br>");

        document.write("2.문자열은 +로 연결할수 있다." + "<br>");
        document.write("내가 좋아하는커피는" + coffee + "<br>");

        document.write("3.length을 가지고 문자열의 길이를 구할 수 있다." + "<br>");
        document.write(coffee.length + "<br>");

        document.write("4.문자열은 원시타입이라 불변성을 띈다." + "<br>");
        let bread = "crossaint";
        bread.toUpperCase();
        document.write(bread + "<br>" +"<br>");

        document.write("문자열 메소드"+"<br>");
        let day = "ABCDEFGHIJK"+"<br>";
        document.write("1. indexOf(): "+"문자열의 특정문자 순서찾기"+"<br>");
        document.write("A는 " + (day.indexOf('A')+1) + "번째 알파벳"+"<br>");
        document.write("B는 " + (day.indexOf('B')+1) + "번째 알파벳"+"<br>");
        document.write("C는 " + (day.indexOf('C')+1) + "번째 알파벳"+"<br>");
        document.write("D는 " + (day.indexOf('D')+1) + "번째 알파벳"+"<br>");
        document.write("E는 " + (day.indexOf('E')+1) + "번째 알파벳"+"<br>");
        document.write("F는 " + (day.indexOf('F')+1) + "번째 알파벳"+"<br>");
        document.write("G는 " + (day.indexOf('G')+1) + "번째 알파벳"+"<br>"+"<br>");

        document.write("2. includes(): "+"문자열에서 특정단어가가 포함되었는지 확인"+"<br>");
        let nickname = "move to next";
        document.write(nickname + "에서 next?" + "<br>");
        document.write(nickname.includes("next") + "<br>");
        document.write(nickname + "에서 pizza?" + "<br>");
        document.write(nickname.includes("pizza") + "<br>" + "<br>");

        document.write("3. match(): "+"문자열에서 정규표현식과 일치되는걸 찾고 배열로 반환"+"<br>");
        let word = "my dog like 산책";
        document.write(word.match(/[a-z]/g) + "<br>");
        document.write(word.match(/[0-9]/g) + "<br>" + "<br>");

        document.write("4. substring(): "+"인덱스의 시작부터 종료직전까지 잘라낸다"+"<br>");
        let hello = "hello frontend world!";
        document.write("예시문구: "+"hello frontend world!"+"<br>")
        document.write(hello.substring(0, 8) + " - 여덟번째 o바로앞" + "<br>")
        document.write(hello.substring(8, 16) + " - 16번째 o바로앞" + "<br>")
        document.write(hello.substring(16, 8) + " - 인덱스의 시작이 끝보가 크면 값을 바꾸어 실행" + "<br>" + "<br>")

        document.write("5. slice(): "+"문자열의 일부분을 잘라서 새로운 문자열을 반환"+"<br>");
        let cartoon = "Pokemon";
        document.write(cartoon.slice(3)+" - 3번째 e전까지 삭제"+"<br>");
        document.write(cartoon.slice(3,6)+" - 6번째 n삭제"+"<br>");
        document.write(cartoon.slice(6,3)+" - 인덱스의 시작이 끝보가 크면 빈칸으로로 실행"+"<br>"+"<br>");

        document.write("6. substr(): "+"시작인덱스의 길이를 인자로 받는다."+"<br>");
        let hobby = "maraton";
        document.write(hobby.substr(1)+" - maraton의 m은 1번째 인자이다."+"<br>");
        document.write(hobby.substr(-1)+" - maraton의 -1번째 인자는 n이다."+"<br>"+"<br>");

        document.write("7. split(): "+"문자열을 쪼개어 값을 원소로하는 배열을 반환함"+"<br>");
        let fruit = "apple";
        document.write(fruit.split("")+" - 하나씩 쪼개준다."+"<br>");
        document.write(fruit.split("",2)+" - 하나씩 쪼개준다."+"<br>"+"<br>");

        document.write("8. replace(): "+"일치하는 첫번쨰 문자열을 찾고, 대체하여 새로운 문자열을 반환"+"<br>");
        let fruit2 = "I like banana";
        document.write("변경전 - "+ fruit2+"<br>")
        document.write("변경후후 - "+ fruit2.replace("banana","flum")+"<br>"+"<br>")

        document.write("9. replaceAll(): "+"모든 일치하는 부분을 찾고 새로운 문자열로 대체한다."+"<br>");
        let fruit3 = "melon is watermelon";
        document.write("변경전 - "+fruit3+"<br>");
        document.write("변경후 - "+fruit3.replaceAll("melon","kiwi")+"<br>"+"<br>")

        document.write("10. toLowerCase(), toUpperCase(): "+"toLowerCase는 모든 문자열을 소문자로 toUpperCase는 모든 문자열을 대문자로 변환"+"<br>");
        let fruit4 = "strawberry";
        let fruit5 = "ORANGE";
        document.write(fruit4+"<br>"+fruit5+"<br>"+fruit4.toUpperCase()+"<br>"+fruit5.toLowerCase()+"<br>"+"<br>");

        document.write("11. repeat(): "+"문자열을 지정한 횟수만큼 새로운 문자열을 만든다."+"<br>");
        let fruit6 = "mango";
        document.write(fruit6.repeat(10)+"<br>"+"<br>");

        document.write("12. trim(): "+"문자열 앞뒤의의 빈 공백을 제거한다."+"<br>");
        let sound = "   꺼어어어어어억   ";
        document.write("어우 잘먹었다." + sound+"<br>");
        document.write("어우 잘먹었다." + sound.trim()+"<br>"+"<br>");

        document.write("13. padStart(): "+"자릿수에 맞춰 인자로 전달받은 문자열을 채운다."+"<br>");
        let count = "714";
        document.write("내생일은 "+count+" 4자릿수로 하면 "+count.padStart(4,'0')+"<br>"+"<br>");