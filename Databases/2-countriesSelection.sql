/*Please add ; after each select statement*/
CREATE PROCEDURE countriesSelection()
BEGIN
	SELECT name,continent,population FROM countries where continent ='Africa'  Order By name asc;
END