-- 코드를 작성해주세요
SELECT YEAR(E1.DIFFERENTIATION_DATE) AS YEAR,
(
    SELECT MAX(E2.SIZE_OF_COLONY)
    FROM ECOLI_DATA AS E2
    WHERE YEAR(E1.DIFFERENTIATION_DATE) = YEAR(E2.DIFFERENTIATION_DATE)
) - E1.SIZE_OF_COLONY AS YEAR_DEV,
E1.ID
FROM ECOLI_DATA AS E1
ORDER BY YEAR, YEAR_DEV;