<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>twoSum</title>
  <script>
  var twoSum = function(nums, target) {
    for (var i = 0 ; i < nums.length; i++) {
    var a = nums[i];
      for (var j= i + 1; j < nums.length; j++) {
        if (a + nums[j] == target)  {
          return [i, j];
        }
      }
    }
  };
</script>
</head>
<body>
  <a>leetcode第一个题</a>
  <a>
    QuestionEditorial Solution  My Submissions
    Total Accepted: 266101
    Total Submissions: 1056277
    Difficulty: Easy
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one solution.

    Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
  </a>

  <div class="top">
    <a>思考方法</a>
    <p> 第一个for是读取nums长度，循环，一个个读
        假设nums长度是 var arr = [0,1,2,3,4,5,6,7,8,9]

        第二个for就是
        1，2，3，4，5，7，8，9
        2，3，4，5，6，7，8，9
        …
        9
        a则是0、1、2、…、9
        如果 a+ nums[j] == target 返回一个二维数组 [i,j]
    </p>
  </div>
</body>
</html>

