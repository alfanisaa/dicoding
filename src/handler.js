/* eslint-disable eol-last */
// eslint-disable-next-line no-unused-vars, import/no-extraneous-dependencies
const { nanoid } = require('nanoid');
// eslint-disable-next-line import/newline-after-import
const notes = require('./notes');
// eslint-disable-next-line no-unused-vars
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  // eslint-disable-next-line no-undef
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
    // eslint-disable-next-line indent
    };
    // eslint-disable-next-line indent, no-undef
notes.push(newNote);

  // eslint-disable-next-line no-undef
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;

  // eslint-disable-next-line no-unreachable
};
module.exports = { addNoteHandler };