-- 코드를 입력하세요
SELECT AO.ANIMAL_ID, AO.NAME
FROM ANIMAL_INS AS AI
RIGHT JOIN ANIMAL_OUTS AS AO ON AI.ANIMAL_ID = AO.ANIMAL_ID
WHERE AI.ANIMAL_ID IS NULL
ORDER BY AO.ANIMAL_ID, AO.NAME;