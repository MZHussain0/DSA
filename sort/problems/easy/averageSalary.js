/**
 * You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
 */

function averageSalary(salary) {
  salary.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    sum += salary[i];
  }
  return sum / (salary.length - 2);
}
console.log(averageSalary([4000, 3000, 1000, 2000]));
