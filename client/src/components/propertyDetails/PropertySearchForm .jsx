import React from 'react'

const PropertySearchForm  = () => 
{
  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-secondary">Propiedades</h1>
      <form action="" className="mt-8 px-10 md:px-28 flex flex-col lg:flex-row justify-center items-center md:justify-between gap-6">
        <div className="flex items-center gap-2">
          <label htmlFor="code">Busqueda por código</label>
          <input type="text" name="code" id="code" className="p-1 px-2 bg-white border border-black rounded-sm dark:text-black" placeholder="Código" />
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="filter">Ordernar por:</label>
          <select name="filter" id="filter" className="p-1 px-2 bg-white border border-black rounded-sm dark:text-black">
            <option value="price">Precio</option>
            <option value="dimensions">Dimensiones</option>
            <option value="type">Tipo</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="category">Categoría:</label>
          <select name="category" id="category" className="p-1 px-2 bg-white border border-black rounded-sm dark:text-black">
            <optgroup label="Tipo de Propiedad">
              <option value="house">Casas</option>
              <option value="apartment">Departamentos</option>
              <option value="cabin">Cabañas</option>
            </optgroup>
            <optgroup label="Características">
              <option value="bedrooms">Dormitorios</option>
              <option value="bathrooms">Baños</option>
              <option value="size">Tamaño</option>
            </optgroup>
            <optgroup label="Otros">
              <option value="price_range">Rango de Precio</option>
              <option value="location">Ubicación</option>
            </optgroup>
          </select>
        </div>
      </form>
    </>
  )
}

export default PropertySearchForm 