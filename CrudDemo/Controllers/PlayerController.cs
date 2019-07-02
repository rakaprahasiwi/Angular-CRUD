using CrudDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudDemo.Controllers
{
    public class PlayerController : Controller
    {
        private CrudContext _context = null;

        public PlayerController()
        {
            _context = new CrudContext();
        }
        // GET: Player
        public JsonResult GetPlayers() //get all
        {
            List<Player> listPlayers = _context.Players.ToList();
            return Json(new { list = listPlayers}, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetPlayerById(int id) //get one
        {
            Player player = _context.Players.Where(x => x.PlayerId == id).SingleOrDefault();
            return Json(new { player = player }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult AddPlayer(Player player) //insert
        {
            _context.Players.Add(player);
            _context.SaveChanges();
            return Json(new { status = "Player added successfully" });
        }

        public JsonResult UpdatePlayer(Player player) //update
        {
            _context.Entry(player).State = System.Data.Entity.EntityState.Modified;
            _context.SaveChanges();
            return Json(new { status = "Player updated successfully" });
        }

        public JsonResult DeletePlayer(int id) //delete
        {
            Player player = _context.Players.Where(x => x.PlayerId == id).SingleOrDefault();
            _context.Players.Remove(player);
            _context.SaveChanges();
            return Json(new { status = "Player deleted successfully" });
        }
    }
}