console.log('テスト１２３')
/*変数　variable*/

// 昔
// var test = 123;　上書きされる
// var test = 'test';

// let test = 123;
// test += 123;　中身は変えられる

// console.log(test)

//kome
/*
kome
*/


const test = 123;
//test += 123; //中身も変わらない
const test_2 = 'テスト';
console.log(typeof test) //typeof で何が入っているかわかる


/*配列*/
const array = [1,2,3];

const array_2 = [
    ["a","v","x"],
    ["b","h","o"]
]

const member = {
    // key: value
    'name': '本田',
    'height': 170,
    'hobby': 'サッカー'
}

console.log(member['name']);
console.log(member.name);

/*繰り返し */

as =[1, 2, 3]

for(a of as){
    console.log(a);
}
