import React, { useState, useEffect } from "react";

export const useThumbFench = () => {
    const [searchTerm, setSearchTerm] = useState('');

    console.log(searchTerm)

    return{ setSearchTerm };
};