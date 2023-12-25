import React, { useState, useEffect } from 'react';

function CostFilter(props) {
    const { costs, filterYear, year } = props;

    // Получение все годы по возростанию
    const costsFilteryear = new Set(
        costs
            .map((cost) => String(cost.date.getFullYear()))
            .sort((a, b) => b - a)
    );

    // Установка состояния по фильтру
    const handleYearFilter = (e) => {
        filterYear(e.target.value, costs);
    };

    return (
        <div className="filter-wrap">
            <div className="filter-title"></div>
            <select name="yearFilter" onChange={handleYearFilter} value={year}>
                <option value="">All years</option>
                {Array.from(costsFilteryear).map((year) => {
                    return (
                        <option key={Math.random()} value={year}>
                            {year}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
export default CostFilter;
